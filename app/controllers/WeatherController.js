import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class WeatherController {
    constructor() {
        this.getWeatherData()
    }
    async getWeatherData() {
        try {
            await weatherService.getWeatherData()
            _drawWeatherWidget()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    swapTempType() {
        weatherService.swapTempType()
        _drawWeatherWidget()
    }
}

function _drawWeatherWidget() {
    const weather = AppState.weather
    setHTML('temperature', (AppState.tempType == 'f' ? weather.tempInFahrenheit : (AppState.tempType == 'c' ? weather.tempInCelsius : weather.tempInKelvin)))
    setHTML('weather-conditions', weather.conditions)
    setHTML('weather-img', `<img src="${weather.icon}">`)
}