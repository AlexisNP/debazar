package fr.mds.debazar.core.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
//@Table(name= "GAMES")
public class Game {
	
	@Id
	@GenericGenerator(name = "increment", strategy = "increment") 
	@GeneratedValue(generator = "increment") 
	private Long id;

}
