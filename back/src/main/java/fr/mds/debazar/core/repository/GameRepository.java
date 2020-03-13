package fr.mds.debazar.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.mds.debazar.core.model.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, String> {

}
