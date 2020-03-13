package fr.mds.debazar.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.mds.debazar.core.model.Offer;

@Repository
public interface OfferRepository extends JpaRepository<Offer, String> {

}
