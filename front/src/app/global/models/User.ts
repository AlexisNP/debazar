import Game from "./Game";

class User {

    private id: string;
    private username: string;
    private firstname: string;
    private lastname: string;
    private email: string;
    private gender: string;
    private avatar: Blob;
    private colour: string
    private verified: boolean;
    private banned: boolean;
    private gamebox: Array<Game>;
    private wishlist: Array<Game>;

    constructor(username: string, email: string) {
        
    }


}

export default User;