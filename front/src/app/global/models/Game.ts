import Editor from "./Editor";

export class Game {

    // Attributes
    private _id: number;
    private _name: string;
    private _image: Blob;
    private _description: string;
    private _players: number;
    private _duration: string;
    private _published: Date;
    private _age: number;
    private _price: number;
    private _editor: Editor;

    // Constructor
    constructor(id: number, name: string, image: Blob, description: string, players: number, duration: string, published: Date, age: number, price: number, editor: Editor) {
        this._name = name;
        this._image = image;
        this._description = "";
        this._players = players;
        this._duration = duration;
        this._published = published;
        this._age = age;
        this._price = price;
        this._editor = editor;
    }

    // Getters / Setters
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get image(): Blob {
        return this._image;
    }
    public set image(value: Blob) {
        this._image = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get players(): number {
        return this._players;
    }
    public set players(value: number) {
        this._players = value;
    }

    public get duration(): string {
        return this._duration;
    }
    public set duration(value: string) {
        this._duration = value;
    }

    public get published(): Date {
        return this._published;
    }
    public set published(value: Date) {
        this._published = value;
    }

    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    public get editor(): Editor {
        return this._editor;
    }
    public set editor(value: Editor) {
        this._editor = value;
    }
}

export default Game;