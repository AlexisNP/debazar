package fr.mds.debazar.core.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.mds.debazar.core.model.Category;
import fr.mds.debazar.core.repository.CategoryRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/category")
public class CategoryController {
	
	private CategoryRepository repository;
	
	public CategoryController(CategoryRepository repository) {
		this.repository = repository;
	}

	@PostMapping("/add")
	public Category addAuthor(@Valid @RequestBody String name) {
		return repository.save(new Category(name));
	}

	@GetMapping()
	public ResponseEntity<List<Category>> getAll() {
		List<Category> categories = repository.findAll();
		return ResponseEntity.ok().body(categories);
	}
	
	@GetMapping("/findId/{id}")
	public Optional<Category> findById(@PathVariable(value = "id") long id) {
		Optional<Category> category = repository.findById(id);
		return category;
	}

}
