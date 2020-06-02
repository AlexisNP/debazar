package fr.mds.debazar.core.model;

import java.util.Set;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class GameDTO {

    @NotNull
    @NotEmpty
    private String name;

    private String image;

    @NotNull
    @NotEmpty
    private String description;

    private Set<Author> author;

    @NotNull
    private Editor editor;

    @NotNull
    @NotEmpty
    private String players;

    @NotNull
    @NotEmpty
    private String duration;

    private String published;

    @NotNull
    @NotEmpty
    private String age;

    private float price;

    @NotNull
    private int rating;

    private Set<Category> category;

    private Set<Game> expansion;

    private Game extension;

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

    public Set<Author> getAuthors() {
        return author;
    }
    public void setAuthor(Set<Author> author) {
        this.author = author;
    }

    public Editor getEditor() {
        return editor;
    }
    public void setEditor(Editor editor) {
        this.editor = editor;
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

    public String getAge() {
        return age;
    }
    public void setAge(String age) {
        this.age = age;
    }

    public float getPrice() {
        return price;
    }
    public void setPrice(float price) {
        this.price = price;
    }

    public int getRating() {
        return rating;
    }
    public void setRating(int rating) {
        this.rating = rating;
    }

    public Set<Category> getCategory() {
        return category;
    }
    public void setCategory(Set<Category> category) {
        this.category = category;
    }

    public Set<Game> getExpansion() {
        return expansion;
    }
    public void setExpansion(Set<Game> expansion) {
        this.expansion = expansion;
    }
    public Set<Author> getAuthor() {
        return author;
    }
    public Game getExtension() {
        return extension;
    }
    public void setExtension(Game extension) {
        this.extension = extension;
    }

}
