package fr.mds.debazar.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.mds.debazar.core.model.Author;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {

    Author findByName(String name);

}
