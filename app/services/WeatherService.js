import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js"

class WeatherService {
    async getWeatherData() {
        const res = await api.get('api/weather')
        AppState.weather = new Weather(res.data)
    }

}

export const weatherService = new WeatherService()