package fr.mds.debazar.authentication.model;

public class UserDetail {

    private String username;
    private String firstname;
    private String lastname;
    private String phone;
    private String mail_address;
    private Boolean banned;

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
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getMail_address() {
        return mail_address;
    }
    public void setMail_address(String mail_address) {
        this.mail_address = mail_address;
    }
    public Boolean getBanned() {
        return banned;
    }
    public void setBanned(Boolean banned) {
        this.banned = banned;
    }

    public UserDetail(User user) {
        this.username = user.getUsername();
        this.firstname = user.getFirstname();
        this.lastname = user.getLastname();
        this.phone = user.getPhone();
        this.mail_address = user.getMail_address();
        this.banned = user.getBanned();
    }

    public UserDetail() {}
}
