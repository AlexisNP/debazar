package fr.mds.debazar.authentication.model;

public class UserSimple {

    private String username;
    private int gamebox;
    private Boolean banned;
    private Boolean verified;

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public int getGamebox() {
        return gamebox;
    }
    public void setGamebox(int gamebox) {
        this.gamebox = gamebox;
    }
    public Boolean getBanned() {
        return banned;
    }
    public void setBanned(Boolean banned) {
        this.banned = banned;
    }
    public Boolean getVerified() {
        return verified;
    }
    public void setVerified(Boolean verified) {
        this.verified = verified;
    }

    public UserSimple(User user) {
        this.username = user.getUsername();
        this.gamebox = user.getGamebox().size();
        this.banned = user.getBanned();
        this.verified = user.getVerified();
    }

    public UserSimple() {}

}