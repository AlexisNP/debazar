package fr.mds.debazar.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.mds.debazar.core.model.Game;

public interface GameRepository extends JpaRepository<Game, String> {

}
