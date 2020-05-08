package fr.mds.debazar.administration.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import fr.mds.debazar.core.model.Game;

@Entity
@Table(name= "best_games")
public class BestGame {

    @Id
    private Long id;

    @NotNull
    @ManyToOne(optional = false)
    @JoinColumn(name = "id_game",referencedColumnName = "id")
    private Game id_game;
    private Date date;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Game getId_game() {
        return id_game;
    }
    public void setId_game(Game id_game) {
        this.id_game = id_game;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }

    public BestGame(Game game, Date date) {
        this.id_game = game;
        this.date = date;
    }

}
