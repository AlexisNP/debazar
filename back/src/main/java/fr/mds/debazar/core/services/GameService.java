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
        System.out.println(gameDto.getName());
        newGame.setName(gameDto.getName());
        System.out.println(gameDto.getImage());
        newGame.setImage(gameDto.getImage());
        System.out.println(gameDto.getDescription());
        newGame.setDescription(gameDto.getDescription());
        System.out.println(gameDto.getPlayers());
        newGame.setPlayers(gameDto.getPlayers());
        System.out.println(gameDto.getDuration());
        newGame.setDuration(gameDto.getDuration());
        System.out.println(gameDto.getPublished());
        newGame.setPublished(gameDto.getPublished());
        System.out.println(gameDto.getAge());
        newGame.setAge(gameDto.getAge());
        System.out.println(gameDto.getPrice());
        newGame.setPrice(gameDto.getPrice());
        System.out.println(gameDto.getRating());
        newGame.setRating(gameDto.getRating());
        System.out.println(gameDto.getEditor());
        newGame.setEditor(gameDto.getEditor());

        for (Category elt : gameDto.getCategory()) {
            System.out.println(elt.getName());
        }
        newGame.setCategories(gameDto.getCategory());

        System.out.println(gameDto.getAuthors());
        newGame.setAuthor(gameDto.getAuthors());

        newGame.setExtension(null);

        return newGame;
    }

    private boolean gameExist(String gameName) {
        return repository.findByName(gameName) != null;
    }
}
