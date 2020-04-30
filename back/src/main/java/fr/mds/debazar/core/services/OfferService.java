package fr.mds.debazar.core.services;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import fr.mds.debazar.core.model.Offer;
import fr.mds.debazar.core.model.OfferDTO;
import fr.mds.debazar.core.repository.OfferRepository;

@Service
public class OfferService {

    private OfferRepository repository;

    public OfferService(OfferRepository repository) {
        this.repository = repository;
    }


    public Offer registerNewOffer(@Valid OfferDTO offerDto) {
        return repository.save(createOffer(offerDto));
    }

    private Offer createOffer(OfferDTO offerDto) {

        Offer newOffer = new Offer();

        newOffer.setGame(offerDto.getGame());
        newOffer.setSeller(offerDto.getSeller());
        newOffer.setState(offerDto.getState());
        newOffer.setDetail(offerDto.getDetail());
        newOffer.setPrice(offerDto.getPrice());

        return newOffer;
    }
}
