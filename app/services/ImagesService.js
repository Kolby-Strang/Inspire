import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"

class ImagesService {
    async getImage() {
        const res = await api.get('api/images')
        AppState.backgroundImage = res.data
    }

}

export const imagesService = new ImagesService()