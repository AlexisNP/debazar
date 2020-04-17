import Editor from "./Editor";
import Category from "./Category";

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
    private _editor: Editor;
    private _category: Category;

    // Constructor
    constructor(id: number, name: string, image: Blob, description: string, players: number, duration: string, published: Date, age: number, editor: Editor, category: Category) {
        this._id = id;
        this._name = name;
        this._image = image;
        this._description = description;
        this._players = players;
        this._duration = duration;
        this._published = published;
        this._age = age;
        this._editor = editor;
        this._category = category;
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

    public get editor(): Editor {
        return this._editor;
    }
    public set editor(value: Editor) {
        this._editor = value;
    }

    public get category(): Category {
        return this._category;
    }
    public set category(value: Category) {
        this._category = value;
    }
}

export default Game;