package fr.mds.debazar.authentication.model;

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
	
	public UserSummary(String username, String firstname, String lastname, String mail_address, 
			String gender, String avatar, String colour, Boolean verified, Boolean banned) {
		this.username = username;
		this.firstname = firstname;
		this.lastname = lastname;
		this.mail_address = mail_address;
		this.gender = gender;
		this.avatar = avatar;
		this.colour = colour;
		this.verified = verified;
		this.banned = banned;
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
	
	
	
}
