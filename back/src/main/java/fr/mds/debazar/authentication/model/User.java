package fr.mds.debazar.authentication.model;

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
@Table(name= "USERS")
public class User {
	
	@Id
	@GenericGenerator(name = "increment", strategy = "increment") 
	@GeneratedValue(generator = "increment") 
	private Long id;

	private String username;
	private String password;

	private String mailAddress;
	private String firstname;
	private String lastname;
	private String gender;
	private String avatar;
	private String color;
	private Boolean verified;
	private Boolean banned;

}
