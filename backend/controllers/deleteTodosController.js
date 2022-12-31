const Todo = require("../model/Todo");

exports.delTodoController = async (req, res) => {
    const delTodo = await Todo.findByIdAndDelete(req.params.id)
    console.log(delTodo)
    res.status(201).json(delTodo)
}