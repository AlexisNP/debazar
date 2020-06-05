import Game from "./Game";
import User from "./User";

class Advert {

    // Attributes
    private _id: number;
    private _game: Game;
    private _user: User;
    private _publishedAt: string;
    private _price: number;
    private _text: string;
    private _state: string;

    // Constructor
    constructor(id: number, game: Game, user: User, publishedAt: string, price: number, text: string, state: string) {
        this._id = id;
        this._game = game;
        this._user = user;
        this._publishedAt = publishedAt;
        this._price = price;
        this._text = text;
        this._state = state;
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

    public get publishedAt(): string {
        return this._publishedAt;
    }
    public set publishedAt(value: string) {
        this._publishedAt = value;
    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    public get text(): string {
        return this._text;
    }
    public set text(value: string) {
        this._text = value;
    }

    public get state(): string {
        return this._state;
    }
    public set state(value: string) {
        this._state = value;
    }

}

export default Advert;