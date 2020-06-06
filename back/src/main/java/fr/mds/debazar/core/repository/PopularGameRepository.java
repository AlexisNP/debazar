package fr.mds.debazar.core.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fr.mds.debazar.core.model.PopularGame;

@Repository
public interface PopularGameRepository extends JpaRepository<PopularGame, Long> {

    @Query(value="SELECT * " +
            "FROM popular_games pg " +
            "ORDER BY pg.date DESC " +
            "LIMIT 3", nativeQuery=true)
    List<PopularGame> findLast3();

}
