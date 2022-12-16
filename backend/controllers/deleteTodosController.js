import Todo from '../model/Todo'

export async function delTodoController (req, res) {
    const {todoId} = req.params
    const delTodo = await Todo.findByIdAndDelete(todoId)
    res.status(201).json(delTodo)
}