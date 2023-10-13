import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { saveState } from "../utils/Store.js";
import { api } from "./AxiosService.js"

class WeatherService {
    swapTempType() {
        if (AppState.tempType == 'f') {
            AppState.tempType = 'c'
        } else if (AppState.tempType == 'c') {
            AppState.tempType = 'k'
        } else {
            AppState.tempType = 'f'
        }
        saveState('tempType', AppState.tempType)
    }

    async getWeatherData() {
        const res = await api.get('api/weather')
        AppState.weather = new Weather(res.data)
    }

}

export const weatherService = new WeatherService()