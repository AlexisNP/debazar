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

import fr.mds.debazar.core.model.Editor;
import fr.mds.debazar.core.repository.EditorRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/editor")
public class EditorController {

    private EditorRepository repository;

    public EditorController(EditorRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/add")
    public Editor addEditor(@Valid @RequestBody String name) {
        return repository.save(new Editor(name));
    }

    @GetMapping()
    public ResponseEntity<List<Editor>> getAll() {
        List<Editor> editors = repository.findAll();
        return ResponseEntity.ok().body(editors);
    }

    @GetMapping("/findId/{id}")
    public Optional<Editor> findById(@PathVariable(value = "id") long id) {
        Optional<Editor> editor = repository.findById(id);
        return editor;
    }

    @GetMapping("/findName")
    public Editor findByName(@Valid @RequestBody String name) {
        Editor editor = repository.findByName(name);
        return editor;
    }

}
