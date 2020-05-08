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

import fr.mds.debazar.administration.model.BestGame;
import fr.mds.debazar.administration.repository.BestGameRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/best-game")
public class BestGameController {

    @Autowired
    private BestGameRepository repository;

    public BestGameController(BestGameRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/find-all")
    public ResponseEntity<List<BestGame>> getAll() {
        List<BestGame> gameList = repository.findAll();
        return ResponseEntity.ok().body(gameList);
    }

    @GetMapping("/last-3")
    public ResponseEntity<List<BestGame>> getLast3() {
        List<BestGame> gameList = repository.getLast3();
        return ResponseEntity.ok().body(gameList);
    }

    @PostMapping("/add-best_game")
    public BestGame createBestGame(@Valid @RequestBody BestGame game) {
        return repository.save(game);
    }

    @PutMapping("/edit-game/{id}")
    public void editBestGame(@PathVariable(value = "id") Long id, @Valid @RequestBody BestGame game) {
//        return gameService.registerNewGame(game);
    }

    @DeleteMapping("/remove-game/{id}")
    public void removeBestGameById(@PathVariable(value = "id") Long id) {
        repository.deleteById(id);
    }
}
