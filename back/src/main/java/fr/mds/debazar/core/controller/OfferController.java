package fr.mds.debazar.core.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.mds.debazar.authentication.model.User;
import fr.mds.debazar.authentication.model.UserSummary;
import fr.mds.debazar.core.exception.GameExistsException;
import fr.mds.debazar.core.model.Game;
import fr.mds.debazar.core.model.GameDTO;
import fr.mds.debazar.core.model.Offer;
import fr.mds.debazar.core.model.OfferDTO;
import fr.mds.debazar.core.model.OfferSummary;
import fr.mds.debazar.core.repository.OfferRepository;
import fr.mds.debazar.core.services.OfferService;

@RestController
@CrossOrigin
@RequestMapping("/api/offer")
public class OfferController {

    private OfferRepository repository;
    private OfferService offerService;

    public OfferController(OfferRepository repository, OfferService offerService) {
        this.repository = repository;
        this.offerService = offerService;
    }

//    @GetMapping("/find-all")
//    public ResponseEntity<List<OfferSummary>> getAll() {
//        List<Offer> offerList = repository.findAll();
//        List<OfferSummary> offers = new ArrayList<>();
//        for (Offer offer : offerList) {
//            offers.add(new OfferSummary(offer));
//        }
//        return ResponseEntity.ok().body(offers);
//    }

    @GetMapping("/find-all")
    public List<Offer> getAll() {;
        return repository.findAll();
    }

    @GetMapping("/find-id/{id}")
    public Optional<Offer> findById(@PathVariable(value = "id") long id) {
        Optional<Offer> offer = repository.findById(id);
        return offer;
    }

    @GetMapping("/find-category/{category}")
    public ResponseEntity<List<OfferSummary>> findByCategory(@PathVariable(value = "category") long category) {

        List<Offer> offerList = repository.findByCategory(category);
        List<OfferSummary> offers = new ArrayList<>();
        for (Offer offer : offerList) {
            offers.add(new OfferSummary(offer));
        }
        return ResponseEntity.ok().body(offers);
    }

    @PostMapping("/add-offer")
    public Offer createOffer(@Valid @RequestBody OfferDTO offerDto) {
        return offerService.registerNewOffer(offerDto);
    }

    @PostMapping("/edit-offer/{id}")
    public void editOffer(@PathVariable(value = "id") long id, @Valid @RequestBody Offer offer) {
//        return offerService.registerNewOffer(offerDto);
    }

    @DeleteMapping("/remove-offer/{id}")
    private void deleteById(@PathVariable(value = "id") long id) {
        repository.deleteById(id);;
    }

}
