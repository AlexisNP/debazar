package fr.mds.debazar.core.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.mds.debazar.core.repository.StateRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/state")
public class StateController {
	
	private StateRepository repository;
	
	public StateController(StateRepository repository) {
		this.repository = repository;
	}

}
