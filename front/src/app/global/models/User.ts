import Game from "./Game";

class User {

    // Attributes
    private _id: number;
    private _username: string;
    private _firstname: string;
    private _lastname: string;
    private _email: string;
    private _gender: string;
    private _avatar: Blob;
    private _colour: string;
    private _verified: boolean;
    private _banned: boolean;
    private _gamebox: Array<Game>;
    private _wishlist: Array<Game>;

    // Constructor
    constructor(id: number, username: string, firstname: string, lastname: string, email: string, gender: string, avatar: Blob, colour: string, verified: boolean, banned: boolean) {
        this._id = id;
        this._username = username;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        this._gender = gender;
        this._colour = colour;
        this._verified = verified;
        this._banned = banned;
    }

    // Getters / Setters
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

    public get firstname(): string {
        return this._firstname;
    }
    public set firstname(value: string) {
        this._firstname = value;
    }

    public get lastname(): string {
        return this._lastname;
    }
    public set lastname(value: string) {
        this._lastname = value;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get gender(): string {
        return this._gender;
    }
    public set gender(value: string) {
        this._gender = value;
    }

    public get avatar(): Blob {
        return this._avatar;
    }
    public set avatar(value: Blob) {
        this._avatar = value;
    }

    public get colour(): string {
        return this._colour;
    }
    public set colour(value: string) {
        this._colour = value;
    }

    public get verified(): boolean {
        return this._verified;
    }
    public set verified(value: boolean) {
        this._verified = value;
    }

    public get banned(): boolean {
        return this._banned;
    }
    public set banned(value: boolean) {
        this._banned = value;
    }

    public get gamebox(): Array<Game> {
        return this._gamebox;
    }
    public set gamebox(value: Array<Game>) {
        this._gamebox = value;
    }

    public get wishlist(): Array<Game> {
        return this._wishlist;
    }
    public set wishlist(value: Array<Game>) {
        this._wishlist = value;
    }

}

export default User;