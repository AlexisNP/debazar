package fr.mds.debazar.core.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.mds.debazar.authentication.model.User;
import fr.mds.debazar.authentication.model.UserSummary;
import fr.mds.debazar.core.model.Game;
import fr.mds.debazar.core.model.GameSummary;
import fr.mds.debazar.core.repository.GameRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/game")
public class GameController {

    private GameRepository repository;

    public GameController(GameRepository repository) {
        this.repository = repository;
    }

    public GameSummary getGameSummary(Game game) {
        return new GameSummary(game);
    }

    @GetMapping()
    public ResponseEntity<List<GameSummary>> getAll() {
        List<Game> gameList = repository.findAll();
        List<GameSummary> games = new ArrayList<>();
        for (Game game : gameList) {
            games.add(getGameSummary(game));
        }
        return ResponseEntity.ok().body(games);
    }

}
