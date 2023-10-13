import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class ClockController {
    constructor() {
        this.getCurrentTime()
        setInterval(this.getCurrentTime, 1000)
    }
    getCurrentTime() {
        const time = new Date()
        setHTML('clock', _getFormattedTime(time))
    }

}

/**@param {Date} time */
function _getFormattedTime(time) {
    const suffix = time.getHours() / 12 >= 1 ? 'PM' : 'AM'
    const hours = time.getHours() / 12 > 1 ? time.getHours() - 12 : time.getHours()
    const minutes = time.getMinutes() / 10 >= 1 ? time.getMinutes() : "0" + time.getMinutes()
    return `${hours}:${minutes} ${suffix}`
}