import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { Pop } from "../utils/Pop.js";
import { api } from "./AxiosService.js";

class TodosService {
    async getTodos() {
        const res = await api.get('api/todos')
        AppState.todos = res.data.map(todoPOJO => new Todo(todoPOJO))
        Pop.success('Todos Retrieved')
    }

    async createTodo(formData) {
        const newTodo = new Todo(formData)
        const res = await api.post('api/todos', newTodo)
        AppState.todos.push(new Todo(res.data))
        AppState.emit('todos')
        Pop.success('Todo Created!')
    }

    async removeTodo(todoId) {
        const res = await api.delete('api/todos/' + todoId)
        AppState.todos = AppState.todos.filter(todo => todo.id != todoId)
        AppState.emit('todos')
        Pop.success('Todo Deleted')
    }

    async toggleTodo(todoId) {
        const targetTodo = AppState.todos.find(todo => todo.id == todoId)
        if (targetTodo == null) {
            Pop.error("Couldn't find todo with id: " + todoId)
            return
        }
        const res = await api.put('api/todos/' + todoId, { completed: !targetTodo.completed })
        const todoIndex = AppState.todos.findIndex(todo => todo.id == todoId)
        AppState.todos[todoIndex] = new Todo(res.data)
        AppState.emit('todos')
    }
}

export const todosService = new TodosService()