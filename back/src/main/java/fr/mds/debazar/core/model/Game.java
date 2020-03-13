package fr.mds.debazar.core.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.GenericGenerator;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name= "GAME")
public class Game {
	
	@Id
	@GenericGenerator(name = "increment", strategy = "increment") 
	@GeneratedValue(generator = "increment") 
	private Long id;
	
	private String name;
	private String image;
	private String description;
	private String players;
	private String duration;
	private String published;
	private int age;
	private float price;
	
	@NotNull
	@ManyToOne(optional = false)
	@JoinColumn(name = "editor",referencedColumnName = "id")
	private Editor editor;

	@ManyToMany(fetch= FetchType.LAZY)
	@JoinTable(
			name = "game_author",
			joinColumns = @JoinColumn(name = "game_id"),
			inverseJoinColumns = @JoinColumn(name = "author_id"))
	private Set<Author> author = new HashSet<>();
	
	@ManyToMany(fetch= FetchType.LAZY)
	@JoinTable(
			name = "game_category",
			joinColumns = @JoinColumn(name = "game_id"),
			inverseJoinColumns = @JoinColumn(name = "category_id"))
	private Set<Category> categories = new HashSet<>();
	
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
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPlayers() {
		return players;
	}
	public void setPlayers(String players) {
		this.players = players;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getPublished() {
		return published;
	}
	public void setPublished(String published) {
		this.published = published;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public Editor getEditor() {
		return editor;
	}
	public void setEditor(Editor editor) {
		this.editor = editor;
	}
	public Set<Author> getAuthor() {
		return author;
	}
	public void setAuthor(Set<Author> author) {
		this.author = author;
	}
	public Set<Category> getCategories() {
		return categories;
	}
	public void setCategories(Set<Category> categories) {
		this.categories = categories;
	}
	
}
