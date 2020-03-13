package fr.mds.debazar.core.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.mds.debazar.core.repository.AuthorRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/author")
public class AuthorController {
	
	private AuthorRepository repository;
	
	public AuthorController(AuthorRepository repository) {
		this.repository = repository;
	}

}
