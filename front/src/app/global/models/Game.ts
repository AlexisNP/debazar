import Editor from "./Editor";

class Game {

    // Attributes
    private _name: string;
    private _image: Blob;
    private _description: string;
    private _players: string;
    private _duration: string;
    private _published: Date;
    private _age: number;
    private _price: number;
    private _editor: Editor;

    // Constructor
    constructor(name: string, image: Blob, description: string, players: string, duration: string, published: Date, age: number, price: number, editor: Editor) {
        this.name = name;
        this.image = image;
        this.description = "";
        this.players = players;
        this.duration = duration;
        this.published = published;
        this.age = age;
        this.price = price;
        this.editor = editor;
    }

    // Getters / Setters
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

    public get players(): string {
        return this._players;
    }
    public set players(value: string) {
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