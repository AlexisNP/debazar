class Editor {

    // Attributes
    private _name: string;

    // Constructor
    constructor(name: string) {
        this._name = name;
    }

    // Getters / Setters
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

}

export default Editor;