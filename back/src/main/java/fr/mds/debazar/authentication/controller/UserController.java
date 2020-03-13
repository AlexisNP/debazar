package fr.mds.debazar.authentication.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.mds.debazar.authentication.exception.MailExistsException;
import fr.mds.debazar.authentication.model.User;
import fr.mds.debazar.authentication.model.UserDTO;
import fr.mds.debazar.authentication.model.UserSummary;
import fr.mds.debazar.authentication.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {
	
	private UserRepository repository;
	private PasswordEncoder passwordEncoder;
	
	public UserController(UserRepository repository, PasswordEncoder passwordEncoder) {
		this.repository = repository;
		this.passwordEncoder = passwordEncoder;
	}
	
	public UserSummary getSummary(User user) {
		return new UserSummary(user.getUsername(), user.getFirstname(), user.getLastname(), user.getMail_address(), 
				user.getGender(), user.getAvatar(), user.getColour(), user.getVerified(), user.getBanned(), 
				user.getGamebox(), user.getWhishlist());
	}

	@PostMapping("/register")
	public User createUser(@Valid @RequestBody UserDTO user) throws MailExistsException {
//		return userService.registerNewUserAccount(user);
		return null;
	}

	@GetMapping("/login")
	public ResponseEntity<UserSummary> connexion(@Valid @RequestBody String[] data) {
		User user = repository.getById(Long.parseLong(data[0]));
		if (user != null && passwordEncoder.matches(data[1], user.getPassword())) {
			UserSummary summary = getSummary(user);
			return ResponseEntity.ok(summary);
		} else {
//			return ResponseEntity.notFound().build(); // return error 404, undefined
//			return ResponseEntity.badRequest().build(); // return error 400, undefined
			return ResponseEntity.noContent().build(); // return null
		}

	}
	
	@GetMapping("/findAll")
	public ResponseEntity<List<UserSummary>> getAllUsers() {
		List<User> registeredUsers = repository.findAll();
		List<UserSummary> users = new ArrayList<>();
		for (User user : registeredUsers) {
			users.add(getSummary(user));
		}
		return ResponseEntity.ok().body(users);
	}

	@GetMapping
	public List<User> list() {
		return repository.findAll();
	}
	
	@GetMapping("/findById")
	public User findById(@Valid @RequestBody Long id) {
		User user = repository.getById(id);
		return user;
	}
}
