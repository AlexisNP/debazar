package fr.mds.debazar.core.repository;

import javax.validation.Valid;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import fr.mds.debazar.core.model.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

    @Query("SELECT g FROM Game g WHERE g.name = :gameName")
    Game findByName(@Param("gameName") String gameName);
    
    @Query("SELECT g FROM Game g WHERE g.id = :gameId")
    Game findGameById(@Param("gameId") Long gameId);

}
