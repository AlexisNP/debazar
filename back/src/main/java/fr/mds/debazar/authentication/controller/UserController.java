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
import fr.mds.debazar.authentication.model.UserSimple;
import fr.mds.debazar.authentication.model.UserSummary;
import fr.mds.debazar.authentication.repository.UserRepository;
import fr.mds.debazar.authentication.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {

    private UserRepository repository;
    private PasswordEncoder passwordEncoder;
    private UserService userService;

    public UserController(UserRepository repository, PasswordEncoder passwordEncoder, UserService userService) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.userService = userService;
    }

    @PostMapping("/register")
    public User createUser(@Valid @RequestBody UserDTO user) throws MailExistsException {
        return userService.registerNewUser(user);
    }

    @GetMapping("/login")
    public ResponseEntity<UserSimple> connexion(@Valid @RequestBody String[] data) {
        User user = repository.getById(Long.parseLong(data[0]));
        if (user != null && passwordEncoder.matches(data[1], user.getPassword())) {
            UserSimple summary = new UserSimple(user);
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
            users.add(new UserSummary(user));
        }
        return ResponseEntity.ok().body(users);
    }

    @GetMapping("/findById")
    public User findById(@Valid @RequestBody Long id) {
        User user = repository.getById(id);
        return user;
    }
}
