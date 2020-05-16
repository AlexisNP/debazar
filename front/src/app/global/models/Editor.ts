class Editor {

    // Attributes
    private _id: number;
    private _name: string;

    // Constructor
    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    // Getters / Setters
    public get id(): number {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

}

export default Editor;