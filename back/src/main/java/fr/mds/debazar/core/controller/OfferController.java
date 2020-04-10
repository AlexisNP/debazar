package fr.mds.debazar.core.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.mds.debazar.authentication.model.User;
import fr.mds.debazar.authentication.model.UserSummary;
import fr.mds.debazar.core.model.Offer;
import fr.mds.debazar.core.model.OfferSummary;
import fr.mds.debazar.core.repository.OfferRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/offer")
public class OfferController {

    private OfferRepository repository;

    public OfferController(OfferRepository repository) {
        this.repository = repository;
    }

    @GetMapping()
    public ResponseEntity<List<OfferSummary>> getAll() {
        List<Offer> offerList = repository.findAll();
        List<OfferSummary> offers = new ArrayList<>();
        for (Offer offer : offerList) {
            offers.add(new OfferSummary(offer));
        }
        return ResponseEntity.ok().body(offers);
    }

}
