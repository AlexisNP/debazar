package fr.mds.debazar.core.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Offer {
	
	@Id
	@GenericGenerator(name = "increment", strategy = "increment") 
	@GeneratedValue(generator = "increment") 
	private Long id;

}
