package fr.mds.debazar.core.controller;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.mds.debazar.core.model.PopularGame;
import fr.mds.debazar.core.repository.GameRepository;
import fr.mds.debazar.core.repository.PopularGameRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/popular-game")
public class PopularGameController {

    private PopularGameRepository repository;
    private GameRepository gameRepo;

    public PopularGameController(PopularGameRepository repository, GameRepository gameRepo) {
        this.repository = repository;
        this.gameRepo = gameRepo;
    }

    @GetMapping("/find-all")
    public List<PopularGame> getAll() {;
        return repository.findAll();
    }

    @GetMapping("/find-id/{id}")
    public Optional<PopularGame> findById(@PathVariable(value = "id") long id) {
        Optional<PopularGame> game = repository.findById(id);
        return game;
    }

    @GetMapping("/last")
    public List<PopularGame> findLast() {
        List<PopularGame> game = repository.findLast3();
        return game;
    }

    @PostMapping("/add")
    public PopularGame addPopularGame(@Valid @RequestBody String data) {
        PopularGame popular = new PopularGame();
        popular.setGame(gameRepo.getOne(Long.parseLong(data)));

        Date date = new Date();
        Long time = date.getTime();
        Timestamp ts = new Timestamp(time);

        popular.setDate(ts);

        return repository.save(popular);
    }

}
