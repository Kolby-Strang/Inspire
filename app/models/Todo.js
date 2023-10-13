export class Todo {
    constructor(data) {
        this.completed = data.completed || false
        this.description = data.description
        this.id = data.id || null
    }

    get listCard() {
        return `
        <div class="d-flex justify-content-between mb-1">
            <div class="d-flex">
                <div class="me-1">
                    <i onclick="app.TodosController.toggleTodo('${this.id}')" class="mdi mdi mdi-checkbox${this.computeCheckbox}-circle" role="button"></i>
                </div>
                <p class="${this.completed ? 'complete-todo' : ''}">${this.description}</p>
            </div>
            <i onclick="app.TodosController.removeTodo('${this.id}')" class="mdi mdi-trash-can text-danger" role="button"></i>
        </div>
        `
    }

    get computeCheckbox() {
        return (this.completed ? '-marked' : '-blank')
    }
}