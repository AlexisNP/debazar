package fr.mds.debazar.authentication.model;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import fr.mds.debazar.authentication.validation.ValidEmail;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
//@PasswordMatches
public class UserDTO {
	
	@NotNull
	@NotEmpty
	private String firstname;
	
	@NotNull
	@NotEmpty
	private String lastname;
	
	@NotNull
	@NotEmpty
	private String password;
	
	@NotNull
	@NotEmpty
	private String matchingPassword;
	
	@ValidEmail
	@NotNull
	@NotEmpty
	private String mailAddress;

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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMatchingPassword() {
		return matchingPassword;
	}

	public void setMatchingPassword(String matchingPassword) {
		this.matchingPassword = matchingPassword;
	}

	public String getMailAddress() {
		return mailAddress;
	}

	public void setMailAddress(String mailAddress) {
		this.mailAddress = mailAddress;
	}
	
}
