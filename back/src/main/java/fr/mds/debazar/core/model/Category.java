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
@Table(name= "CATEGORY")
public class Category {
	
	@Id
	@GenericGenerator(name = "increment", strategy = "increment") 
	@GeneratedValue(generator = "increment") 
	private Long id;
	
	private String name;

	public Category() {}

	public Category(String name) {
		this.name = name;
	}

	public Category(Long id,String name) {
		this.id = id;
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
