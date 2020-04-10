package fr.mds.debazar.core.model;

import java.util.HashSet;
import java.util.Set;

public class GameSummary {

    private Long id;
    private String name;
//	private String image;
    private String description;
    private String players;
    private String duration;
//	private String published;
    private int age;
    private Set<String> categories = new HashSet<>();

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
//	public String getImage() {
//		return image;
//	}
//	public void setImage(String image) {
//		this.image = image;
//	}
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
//	public String getPublished() {
//		return published;
//	}
//	public void setPublished(String published) {
//		this.published = published;
//	}
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public Set<String> getCategories() {
        return categories;
    }
    public void setCategories(Set<String> categories) {
        this.categories = categories;
    }

    public GameSummary() {}

    public GameSummary(Game game) {
        this.id = game.getId();
        this.name = game.getName();
        this.description = game.getDescription();
        this.players = game.getPlayers();
        this.duration = game.getDuration();
        this.age = game.getAge();
        for (Category category : game.getCategories()) {
            this.categories.add(category.getName());
        }
    }
}
