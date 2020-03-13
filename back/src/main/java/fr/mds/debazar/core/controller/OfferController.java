package fr.mds.debazar.core.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import fr.mds.debazar.core.repository.OfferRepository;

@RestController
@CrossOrigin
public class OfferController {
	
	private OfferRepository repository;
	
	public OfferController(OfferRepository repository) {
		this.repository = repository;
	}

}
