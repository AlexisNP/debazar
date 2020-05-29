package fr.mds.debazar.core.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import fr.mds.debazar.core.model.Offer;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Long> {

    @Query(value="SELECT * " +
            "FROM Offer offer " +
            "JOIN Game g ON offer.game = g.id " +
            "JOIN game_category gc ON gc.game_id = g.id " +
            "WHERE gc.category_id = :categorie", nativeQuery=true)
    List<Offer> findByCategory(@Param("categorie") long categorie);

}
