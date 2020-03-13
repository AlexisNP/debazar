package fr.mds.debazar.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.mds.debazar.core.model.Offer;

public interface OfferRepository extends JpaRepository<Offer, String> {

}
