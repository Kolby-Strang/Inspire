import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";

export class TodosController {
    constructor() {
        AppState.on('account', this.getTodos)
        AppState.on('todos', _drawTodoList)
    }
    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    toggleTodos() {
        if (!AppState.account) {
            Pop.toast('Cannot access todos without sign in', 'warning', 'top-end', 1000)
        } else {
            // @ts-ignore
            bootstrap.Offcanvas.getOrCreateInstance('#todoOffCanvas').toggle()
        }
    }

    async createTodo(event) {
        try {
            event.preventDefault()
            const form = event.target
            const formData = getFormData(form)
            todosService.createTodo(formData)
            form.reset()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    async removeTodo(todoId) {
        try {
            const wantsToRemove = await Pop.confirm()
            if (wantsToRemove) {
                todosService.removeTodo(todoId)
            }
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    async toggleTodo(todoId) {
        try {
            await todosService.toggleTodo(todoId)
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}

function _drawTodoList() {
    const todos = AppState.todos
    let content = ''
    let todosToComplete = 0
    todos.forEach(todo => {
        content += todo.listCard
        if (!todo.completed)
            todosToComplete++
    })
    setHTML('todo-list', content)
    setText('todo-count', todosToComplete + (todosToComplete == 1 ? ' Todo' : ' Todos'))
}