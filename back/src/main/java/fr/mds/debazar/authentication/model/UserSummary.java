package fr.mds.debazar.authentication.model;

import java.util.HashSet;
import java.util.Set;

import fr.mds.debazar.core.model.Game;

public class UserSummary {

	private String username;
	private String firstname;
	private String lastname;
	private String mail_address;
	private String gender;
	private String avatar;
	private String colour;
	private Boolean verified;
	private Boolean banned;
	private Set<Game> gamebox = new HashSet<>();
	private Set<Game> whishlist = new HashSet<>();
	
	public UserSummary(String username, String firstname, String lastname, String mail_address, 
			String gender, String avatar, String colour, Boolean verified, Boolean banned, 
			Set<Game> gamebox, Set<Game> whishlist) {
		this.username = username;
		this.firstname = firstname;
		this.lastname = lastname;
		this.mail_address = mail_address;
		this.gender = gender;
		this.avatar = avatar;
		this.colour = colour;
		this.verified = verified;
		this.banned = banned;
		this.gamebox = gamebox;
		this.whishlist = whishlist;
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
	public void setGamebox(Set<Game> gamebox) {
		this.gamebox = gamebox;
	}
	public Set<Game> getWishlist() {
		return whishlist;
	}
	public void setWhishlist(Set<Game> whishlist) {
		this.whishlist = whishlist;
	}
	
}
