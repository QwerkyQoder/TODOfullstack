const Todo = require("../model/Todo");

exports.getTodosController = async(req, res) => {
    // const {todoId} = req.params
    const allTodos = await Todo.find()
    console.log("In GetTodo")
    // console.log(allTodos)
    res.json(allTodos)
} 

exports.editTodosController = async(req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success:true,
            message: "User updated"
        })
    console.log("In EdittTodo")
    // res.json(todo)
} 