import { State } from './State';
import User from './User';
import Game from './Game';

export class Offer {

    // Attributes
    private _id: number;
    private _game: Game;
    private _seller: User;
    private _state: State;
    private _detail: string;
    private _price: number;

    // Constructor
    constructor(id: number, game: Game, seller: User, state: State, detail: string, price: number) {
        this._id = id;
        this._game = game;
        this._seller = seller;
        this._state = state;
        this._detail = detail;
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
    public get seller(): User {
        return this._seller;
    }
    public set seller(value: User) {
        this._seller = value;
    }
    public get state(): State {
        return this._state;
    }
    public set state(value: State) {
        this._state = value;
    }
    public get detail(): string {
        return this._detail;
    }
    public set detail(value: string) {
        this._detail = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
}