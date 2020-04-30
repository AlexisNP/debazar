package fr.mds.debazar.core.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.mds.debazar.core.model.Editor;

@Repository
public interface EditorRepository extends JpaRepository<Editor, Long> {

    Editor findByName(String editorName);

}
