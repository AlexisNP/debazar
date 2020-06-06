package fr.mds.debazar.core.services;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

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

        System.out.println(offerDto.getGame().getName());
        newOffer.setGame(offerDto.getGame());
        System.out.println(offerDto.getSeller().getUsername());
        newOffer.setSeller(offerDto.getSeller());
        newOffer.setState(offerDto.getState());
        newOffer.setDetail(offerDto.getDetail());
        newOffer.setPrice(offerDto.getPrice());

        return newOffer;
    }
}
