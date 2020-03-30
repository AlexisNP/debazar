import Game from "./Game";
import User from "./User";

class Advert {

    // Attributes
    private _id: number;
    private _game: Game;
    private _user: User;
    private _publishedAt: Date;
    private _price: number;

    // Constructor
    constructor(id: number, game: Game, user: User, publishedAt: Date, price: number) {
        this._id = id;
        this._game = game;
        this._user = user;
        this._publishedAt = publishedAt;
        this._price = price;
    }

    // Getters / Setters
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get game(): Game {
        return this._game;
    }
    public set game(value: Game) {
        this._game = value;
    }

    public get user(): User {
        return this._user;
    }
    public set user(value: User) {
        this._user = value;
    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    public get publishedAt(): Date {
        return this._publishedAt;
    }
    public set publishedAt(value: Date) {
        this._publishedAt = value;
    }
}

export default Advert;