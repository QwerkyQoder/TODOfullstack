const Todo = require("../model/Todo");

exports.createTaskController =  async  (req,res) => {
    const todoId = req.params.id
    console.log(req.params)
    const todo = await Todo.findById(todoId)
    if(!todo) return res.status(400).send("Todo does not exists")
    const {text} =req.body
    todo.tasks.push(text)
    await todo.save()
    res.json(todo)
}
