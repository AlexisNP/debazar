package fr.mds.debazar.core.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.mds.debazar.core.repository.CategoryRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/category")
public class CategoryController {
	
	private CategoryRepository repository;
	
	public CategoryController(CategoryRepository repository) {
		this.repository = repository;
	}

}
