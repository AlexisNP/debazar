package fr.mds.debazar.core.model;

import fr.mds.debazar.authentication.model.UserDetail;
import fr.mds.debazar.core.controller.GameController;

public class OfferSummary {

    private Long id;
    private GameSummary game;
    private UserDetail seller;
    private String state;
    private String detail;
    private float price;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public GameSummary getGame() {
        return game;
    }
    public void setGame(GameSummary game) {
        this.game = game;
    }
    public UserDetail getSeller() {
        return seller;
    }
    public void setSeller(UserDetail seller) {
        this.seller = seller;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
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

    public OfferSummary(Offer offer) {
        this.id = offer.getId();
        this.game = new GameSummary(offer.getGame());
        this.seller = new UserDetail(offer.getSeller());
        this.state = offer.getState().getName();
        this.detail = offer.getDetail();
        this.price = offer.getPrice();
    }
}
