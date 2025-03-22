import { ShowcaseInterface } from "../../../modules/anime-showcases/utils/showcase-interface";
import { v4 as uuidv4 } from "uuid";

class Anime implements ShowcaseInterface {
    readonly id: string;
    readonly title: string;

    constructor() {
        this.id = uuidv4();
        this.title = this.id;
    }
}

export { Anime };
