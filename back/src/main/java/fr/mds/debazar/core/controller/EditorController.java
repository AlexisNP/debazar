package fr.mds.debazar.core.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.mds.debazar.core.repository.EditorRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/editor")
public class EditorController {
	
	private EditorRepository repository;
	
	public EditorController(EditorRepository repository) {
		this.repository = repository;
	}

}
