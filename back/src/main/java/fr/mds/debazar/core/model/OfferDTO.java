package fr.mds.debazar.core.model;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import fr.mds.debazar.authentication.model.User;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class OfferDTO {

    @NotNull
    @NotEmpty
    private Game game;
    @NotNull
    @NotEmpty
    private User seller;
    @NotNull
    @NotEmpty
    private State state;
    @NotNull
    @NotEmpty
    private String detail;
    @NotNull
    @NotEmpty
    private float price;

    public Game getGame() {
        return game;
    }
    public void setGame(Game game) {
        this.game = game;
    }
    public User getSeller() {
        return seller;
    }
    public void setSeller(User seller) {
        this.seller = seller;
    }
    public State getState() {
        return state;
    }
    public void setState(State state) {
        this.state = state;
    }
    public String getDetail() {
        return detail;
    }
    public void setDetail(String detail) {
        this.detail = detail;
    }
    public float getPrice() {
        return price;
    }
    public void setPrice(float price) {
        this.price = price;
    }
}
