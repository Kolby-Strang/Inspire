export class Weather {
    constructor(data) {
        this.temp = data.main.temp
        this.conditions = data.weather[0].main
        this.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    }

    get tempInFahrenheit() {
        return (((this.temp - 273.15) * (9 / 5)) + 32).toFixed(0) + '<i class="mdi mdi-temperature-fahrenheit"></i>'
    }
    get tempInCelsius() {
        return (this.temp - 273.15).toFixed(0) + '<i class="mdi mdi-temperature-celsius"></i>'
    }
}