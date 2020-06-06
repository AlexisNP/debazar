package fr.mds.debazar.core.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.mds.debazar.core.model.BestGame;

@Repository
public interface BestGameRepository extends JpaRepository<BestGame, Long> {

    Optional<BestGame> findTopByOrderByIdDesc();

}
