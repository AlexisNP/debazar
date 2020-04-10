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

import fr.mds.debazar.core.model.State;
import fr.mds.debazar.core.repository.StateRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/state")
public class StateController {
	
	private StateRepository repository;
	
	public StateController(StateRepository repository) {
		this.repository = repository;
	}

	@PostMapping("/add")
	public State addAuthor(@Valid @RequestBody String name) {
		return repository.save(new State(name));
	}

	@GetMapping()
	public ResponseEntity<List<State>> getAll() {
		List<State> states = repository.findAll();
		return ResponseEntity.ok().body(states);
	}
	
	@GetMapping("/findId/{id}")
	public Optional<State> findById(@PathVariable(value = "id") long id) {
		Optional<State> state = repository.findById(id);
		return state;
	}

}
