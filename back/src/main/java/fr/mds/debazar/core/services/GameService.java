package fr.mds.debazar.core.services;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import fr.mds.debazar.core.controller.EditorController;
import fr.mds.debazar.core.exception.GameExistsException;
import fr.mds.debazar.core.model.Category;
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
        newGame.setRating(gameDto.getRating());
        newGame.setEditor(gameDto.getEditor());

        newGame.setCategories(gameDto.getCategory());

        newGame.setAuthor(gameDto.getAuthors());

        newGame.setExtension(null);

        return newGame;
    }

    private boolean gameExist(String gameName) {
        return repository.findByName(gameName) != null;
    }
}
