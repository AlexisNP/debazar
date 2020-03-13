package fr.mds.debazar.authentication.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.mds.debazar.authentication.model.User;
import fr.mds.debazar.authentication.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {
	
	private UserRepository repository;
	
	public UserController(UserRepository repository) {
		this.repository = repository;
	}

	@PostMapping("/register")
	public void register(@Valid @RequestBody User user) {
		repository.save(user);
	}
	
	@GetMapping("/connexion")
	public User connexion(@Valid @RequestBody User user) {
		return user;
	}
	
	@GetMapping("/findAll")
	public List<User> list() {
		List<User> users = repository.findAll();
		return users;
	}
	
	@GetMapping("/findById")
	public User findById(@Valid @RequestBody Long id) {
		User user = repository.findById(id);
		return user;
	}
}
