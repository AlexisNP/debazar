package fr.mds.debazar.core.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import fr.mds.debazar.core.repository.GameRepository;

@RestController
@CrossOrigin
public class GameController {
	
	private GameRepository repository;
	
	public GameController(GameRepository repository) {
		this.repository = repository;
	}

}
