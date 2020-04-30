package fr.mds.debazar.core.services;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import fr.mds.debazar.core.controller.EditorController;
import fr.mds.debazar.core.exception.GameExistsException;
import fr.mds.debazar.core.model.Editor;
import fr.mds.debazar.core.model.Game;
import fr.mds.debazar.core.model.GameDTO;
import fr.mds.debazar.core.repository.EditorRepository;
import fr.mds.debazar.core.repository.GameRepository;

@Service
public class GameService {

    private GameRepository repository;
    private EditorRepository editorRepo;
    private EditorController editorController;

    public GameService(GameRepository gameRepository, EditorRepository editorRepo, EditorController editorController) {
        this.repository = gameRepository;
        this.editorRepo = editorRepo;
    }


    public Game registerNewGame(@Valid GameDTO gameDto) throws GameExistsException {
        if (gameExist(gameDto.getName())) {
            throw new GameExistsException("Un jeu existe déjà avec ce nom :" + gameDto.getName());
        }
        return repository.save(createGame(gameDto));
    }

    private Game createGame(GameDTO gameDto) {

        Game newGame = new Game();
        newGame.setName(gameDto.getName());
        newGame.setImage(gameDto.getImage());
        newGame.setDescription(gameDto.getDescription());
        newGame.setPlayers(gameDto.getPlayers());
        newGame.setDuration(gameDto.getDuration());
        newGame.setPublished(gameDto.getPublished());
        newGame.setAge(gameDto.getAge());
        newGame.setPrice(gameDto.getPrice());

        String editorName = gameDto.getEditor();

        newGame.setEditor(this.findOrCreate(editorName));

//      newGame.setCategories(gameDto.getCategories());
//      newGame.setAuthor(gameDto.getAuthor());

        return newGame;
    }

    private Editor findOrCreate(String editorName) {
        Editor editor = editorRepo.findByName(editorName);
        if (editor != null ) {
            return editor;
        } else {
            editorController.addEditor(editorName);
            editor = editorRepo.findByName(editorName);
            return editor;
        }
    }

    private boolean gameExist(String gameName) {
        return repository.findByName(gameName) != null;
    }
}
