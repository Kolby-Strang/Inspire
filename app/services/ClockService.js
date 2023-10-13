import { AppState } from "../AppState.js"
import { saveState } from "../utils/Store.js"

class ClockService {
    toggleTimeType() {
        if (AppState.clockType == 12) {
            AppState.clockType = 24
        } else {
            AppState.clockType = 12
        }
        saveState('clockType', AppState.clockType)
    }


}

export const clockService = new ClockService()