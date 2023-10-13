import { Todo } from './models/Todo.js'
import { Weather } from './models/Weather.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { loadState } from './utils/Store.js'

class ObservableAppState extends EventEmitter {
  page = ''
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null

  socketData = []

  backgroundImage = {}

  quote = {}

  /**@type {Weather} */
  weather

  tempType = 'f'

  clockType = 12

  /**@type {Todo[]} */
  todos = []

  // Used to load initial data
  init() {
    this.tempType = loadState('tempType') || 'f'
    this.clockType = loadState('clockType') || 12
  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})