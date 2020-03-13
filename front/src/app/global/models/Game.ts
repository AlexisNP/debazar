import Editor from "./Editor";

class Game {

    private name: string;
    private image: Blob;
    private description: string;
    private players: string;
    private duration: string;
    private published: Date;
    private age: number;
    private price: number;
    private editor: Editor;

    constructor(name: string) {
        this.name = name;
        this.description = "";
    }

    
}

export default Game;