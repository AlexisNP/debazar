package fr.mds.debazar.administration.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fr.mds.debazar.administration.model.PopularGame;

@Repository
public interface PopularGameRepository extends JpaRepository<PopularGame, Long> {

    @Query(value="SELECT * FROM best_games ORDER BY id DESC LIMIT 3", nativeQuery =true)
    List<PopularGame> getLast3();

}
