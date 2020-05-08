package fr.mds.debazar.authentication.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import fr.mds.debazar.core.model.Category;
import fr.mds.debazar.core.model.Game;
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

    private String mail_address;
    private String firstname;
    private String lastname;
    private String gender;
    private String address;
    private String city;
    private String phone;
    private String avatar;
    private String colour;
    private Boolean verified;
    private Boolean banned;

    @ManyToMany(fetch= FetchType.LAZY)
    @JoinTable(
            name = "gamebox",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "game_id"))
    private Set<Game> gamebox = new HashSet<>();

    @ManyToMany(fetch= FetchType.LAZY)
    @JoinTable(
            name = "whishlist",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "game_id"))
    private Set<Game> whishlist = new HashSet<>();

    @ManyToMany(fetch= FetchType.LAZY)
    @JoinTable(
            name = "interest",
            joinColumns = @JoinColumn(name = "users_categories"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Set<Category> interest = new HashSet<>();

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getMail_address() {
        return mail_address;
    }
    public void setMail_address(String mail_address) {
        this.mail_address = mail_address;
    }
    public String getFirstname() {
        return firstname;
    }
    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }
    public String getLastname() {
        return lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getAvatar() {
        return avatar;
    }
    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
    public String getColour() {
        return colour;
    }
    public void setColour(String colour) {
        this.colour = colour;
    }
    public Boolean getVerified() {
        return verified;
    }
    public void setVerified(Boolean verified) {
        this.verified = verified;
    }
    public Boolean getBanned() {
        return banned;
    }
    public void setBanned(Boolean banned) {
        this.banned = banned;
    }
    public Set<Game> getGamebox() {
        return gamebox;
    }
    public void setGamebox(Set<Game> games) {
        this.gamebox = games;
    }
    public Set<Game> getWhishlist() {
        return whishlist;
    }
    public void setWhishlist(Set<Game> games) {
        this.whishlist = games;
    }
    public Set<Category> getInterest() {
        return interest;
    }
    public void setInterest(Set<Category> interest) {
        this.interest = interest;
    }

}
