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

import fr.mds.debazar.core.model.BestGame;
import fr.mds.debazar.core.model.PopularGame;
import fr.mds.debazar.core.repository.BestGameRepository;
import fr.mds.debazar.core.repository.GameRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/best-game")
public class BestGameController {

    private BestGameRepository repository;
    private GameRepository gameRepo;

    public BestGameController(BestGameRepository repository, GameRepository gameRepo) {
        this.repository = repository;
        this.gameRepo = gameRepo;
    }

    @GetMapping("/find-all")
    public List<BestGame> getAll() {;
        return repository.findAll();
    }

    @GetMapping("/find-id/{id}")
    public Optional<BestGame> findById(@PathVariable(value = "id") long id) {
        Optional<BestGame> game = repository.findById(id);
        return game;
    }

    @GetMapping("/last")
    public Optional<BestGame> findLast() {
        Optional<BestGame> game = repository.findTopByOrderByIdDesc();
        return game;
    }

    @PostMapping("/add")
    public BestGame addBestGame(@Valid @RequestBody String data) {
        BestGame best = new BestGame();
        best.setGame(gameRepo.getOne(Long.parseLong(data)));

        Date date = new Date();
        Long time = date.getTime();
        Timestamp ts = new Timestamp(time);

        best.setDate(ts);

        return repository.save(best);
    }
}
