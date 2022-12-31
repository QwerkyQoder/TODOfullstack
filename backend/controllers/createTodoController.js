const Todo = require("../model/Todo");

exports.createTodoController = async (req,res) => {
    const {title, tasks} = req.body
    console.log(req.body)
    const newTodo = await Todo.create ({title, tasks})
    console.log(newTodo)
    res.json(newTodo)
}

