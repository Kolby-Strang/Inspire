import { AppState } from "../AppState.js";
import { clockService } from "../services/ClockService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class ClockController {
    constructor() {
        this.getCurrentTime()
        AppState.on('clockType', this.getCurrentTime)
        setInterval(this.getCurrentTime, 1000)
    }
    getCurrentTime() {
        const time = new Date()
        setHTML('clock', _getFormattedTime(time))
    }

    toggleTimeType() {
        clockService.toggleTimeType()
    }

}

/**@param {Date} time */
function _getFormattedTime(time) {
    if (AppState.clockType == 12) {
        const suffix = time.getHours() / 12 >= 1 ? 'PM' : 'AM'
        const hours = time.getHours() / 12 > 1 ? time.getHours() - 12 : time.getHours()
        const minutes = time.getMinutes() / 10 >= 1 ? time.getMinutes() : "0" + time.getMinutes()
        return `${hours}${time.getSeconds() % 2 == 0 ? ":" : " "}${minutes} ${suffix}`
    } else {
        const hours = time.getHours() > 9 ? time.getHours() : '0' + time.getHours()
        const minutes = time.getMinutes() / 10 >= 1 ? time.getMinutes() : "0" + time.getMinutes()
        return `${hours}${time.getSeconds() % 2 == 0 ? ":" : " "}${minutes}`
    }
}