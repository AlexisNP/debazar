package fr.mds.debazar.administration.controller;

import java.util.List;

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

import fr.mds.debazar.administration.model.PopularGame;
import fr.mds.debazar.administration.repository.PopularGameRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/popular-game")
public class PopularGameController {


    @Autowired
    private PopularGameRepository repository;

    public PopularGameController(PopularGameRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/find-all")
    public ResponseEntity<List<PopularGame>> getAll() {
        List<PopularGame> gameList = repository.findAll();
        return ResponseEntity.ok().body(gameList);
    }

    @GetMapping("/last-3")
    public ResponseEntity<List<PopularGame>> getLast3() {
        List<PopularGame> gameList = repository.getLast3();
        return ResponseEntity.ok().body(gameList);
    }

    @PostMapping("/add-best_game")
    public PopularGame createPopularGame(@Valid @RequestBody PopularGame game) {
        return repository.save(game);
    }

    @PutMapping("/edit-game/{id}")
    public void editPopularGame(@PathVariable(value = "id") Long id, @Valid @RequestBody PopularGame game) {
//        return gameService.registerNewGame(game);
    }

    @DeleteMapping("/remove-game/{id}")
    public void removePopularGameById(@PathVariable(value = "id") Long id) {
        repository.deleteById(id);
    }
}
