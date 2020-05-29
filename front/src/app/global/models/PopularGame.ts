import Game from './Game';

export class PopularGame {

    // Attributes
    private _id: number;
    private _game: Game;
    private _date: Date;

    // Constructor
    constructor(id: number, game: Game, date: Date) {
        this._id = id;
        this._game = game;
        this._date = date;
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
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }
}