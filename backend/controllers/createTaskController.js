import TodoModel from "../model/Todo";

export async function createTaskController (req,res) {
    const todoId = req.params.todoId
    const todo = await Todo.findById(todoId)
    if(!todo) return res.status(400).send("Todo does not exists")
    const {text} =req.body
    todo.tasks.push(text)
    await todo.save()
    res.json(todo)
}
