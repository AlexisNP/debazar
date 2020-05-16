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

import fr.mds.debazar.core.model.Author;
import fr.mds.debazar.core.repository.AuthorRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/author")
public class AuthorController {

    private AuthorRepository repository;

    public AuthorController(AuthorRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/add-author")
    public Author addAuthor(@Valid @RequestBody String name) {
        return repository.save(new Author(name));
    }

    @GetMapping("/find-all")
    public ResponseEntity<List<Author>> getAll() {
        List<Author> authors = repository.findAll();
        return ResponseEntity.ok().body(authors);
    }

    @GetMapping("/findId/{id}")
    public Optional<Author> findById(@PathVariable(value = "id") long id) {
        Optional<Author> author = repository.findById(id);
        return author;
    }

    @GetMapping("/find-name/{name}")
    public Author findByName(@PathVariable(value = "name") String name) {
        Author author = repository.findByName(name);
        return author;
    }
}
