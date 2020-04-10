package fr.mds.debazar.authentication.model;

import java.util.HashSet;
import java.util.Set;

import fr.mds.debazar.core.model.Game;
import fr.mds.debazar.core.model.GameSummary;

public class UserSummary {

    private String username;
    private String firstname;
    private String lastname;
    private String mail_address;
    private String gender;
    private String phone;
    private String avatar;
    private String colour;
    private Boolean verified;
    private Boolean banned;
    private Set<GameSummary> gamebox = new HashSet<>();
    private Set<GameSummary> whishlist = new HashSet<>();

    public UserSummary() {}

    public UserSummary(User user) {
        this.username = user.getUsername();
        this.firstname = user.getFirstname();
        this.lastname = user.getLastname();
        this.mail_address = user.getMail_address();
        this.gender = user.getGender();
        this.phone = user.getPhone();
        this.avatar = user.getAvatar();
        this.colour = user.getColour();
        this.verified = user.getVerified();
        this.banned = user.getBanned();
        for (Game game : user.getGamebox()) {
            this.gamebox.add(new GameSummary(game));
        }
        for (Game game : user.getWhishlist()) {
            this.whishlist.add(new GameSummary(game));
        }
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
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
    public String getMail_address() {
        return mail_address;
    }
    public void setMail_address(String mail_address) {
        this.mail_address = mail_address;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
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
    public Set<GameSummary> getGamebox() {
        return gamebox;
    }
    public void setGamebox(Set<GameSummary> gamebox) {
        this.gamebox = gamebox;
    }
    public Set<GameSummary> getWishlist() {
        return whishlist;
    }
    public void setWhishlist(Set<GameSummary> whishlist) {
        this.whishlist = whishlist;
    }

}
