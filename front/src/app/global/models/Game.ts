import Editor from "./Editor";
import Category from "./Category";

class Game {

    // Attributes
    private _id: number;
    private _name: string;
    private _image: string;
    private _description: string;
    private _players: number;
    private _duration: string;
    private _published: string;
    private _rating: number;
    private _age: number;
    private _editor: Editor;
    private _categories: Category[];
    private _extensions: any[];

    // Constructor
    constructor(id: number, name: string, image: string, description: string, players: number, 
        duration: string, published: string, rating: number, age: number, 
        editor: Editor, categories: Category[], extensions: any[]) {
        this._id = id;
        this._name = name;
        this._image = image;
        this._description = description;
        this._players = players;
        this._duration = duration;
        this._published = published;
        this._rating = rating;
        this._age = age;
        this._editor = editor;
        this._categories = categories;
        this._extensions = extensions;
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

    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
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

    public get published(): string {
        return this._published;
    }
    public set published(value: string) {
        this._published = value;
    }

    public get rating(): number {
        return this._rating;
    }
    public set rating(value: number) {
        this._rating = value;
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

    public get categories(): Category[] {
        return this._categories;
    }
    public set categories(value: Category[]) {
        this._categories = value;
    }

    public get extensions(): any[] {
        return this._extensions;
    }
    public set extensions(value: any[]) {
        this._extensions = value;
    }
}

export default Game;