import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";

export class ImagesController {
    constructor() {
        this.getImage()
    }
    async getImage() {
        try {
            await imagesService.getImage()
            document.body.style.backgroundImage = `url(${AppState.backgroundImage.largeImgUrl})`
            setHTML('image-author', `Image author: ${AppState.backgroundImage.author}`)
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }


}