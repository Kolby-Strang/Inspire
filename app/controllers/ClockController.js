import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class ClockController {
    constructor() {
        this.getCurrentTime()
        setInterval(this.getCurrentTime, 1000)
    }
    getCurrentTime() {
        const time = new Date()
        setHTML('clock', `${time.getHours()}:${time.getMinutes()}`)
    }

}