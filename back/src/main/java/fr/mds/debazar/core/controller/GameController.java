package fr.mds.debazar.core.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.mds.debazar.core.exception.GameExistsException;
import fr.mds.debazar.core.model.Game;
import fr.mds.debazar.core.model.GameDTO;
import fr.mds.debazar.core.model.GameSummary;
import fr.mds.debazar.core.repository.GameRepository;
import fr.mds.debazar.core.services.GameService;

@RestController
@CrossOrigin
@RequestMapping("/api/game")
public class GameController {

    @Autowired
    private GameRepository repository;

    private GameService gameService;

    public GameController(GameRepository repository, GameService gameService) {
        this.repository = repository;
        this.gameService = gameService;
    }

    public GameSummary getGameSummary(Game game) {
        return new GameSummary(game);
    }

    @GetMapping("/find-all")
    public ResponseEntity<List<GameSummary>> getAll() {
        List<Game> gameList = repository.findAll();
        List<GameSummary> games = new ArrayList<>();
        for (Game game : gameList) {
            games.add(getGameSummary(game));
        }
        return ResponseEntity.ok().body(games);
    }

    @GetMapping("/find-id/{id}")
    public Optional<Game> findById(@PathVariable(value = "id") Long id) {
        Optional<Game> game = repository.findById(id);
        return game;
    }

    @PostMapping("/add-game")
    public Game createGame(@Valid @RequestBody GameDTO game) throws GameExistsException {
        return gameService.registerNewGame(game);
    }

    @PutMapping("/edit-game/{id}")
    public void editGame(@PathVariable(value = "id") Long id, @Valid @RequestBody GameDTO game) {
//        return gameService.registerNewGame(game);
    }

    @DeleteMapping("/remove-game/{id}")
    public void removeById(@PathVariable(value = "id") Long id) {
        repository.deleteById(id);
    }

}
