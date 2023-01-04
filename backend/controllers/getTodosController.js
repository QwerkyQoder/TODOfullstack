const Todo = require("../model/Todo");

exports.getTodosController = async(req, res) => {
    // const {todoId} = req.params
    try {
        const allTodos = await Todo.find()
        console.log("In GetTodo")
        console.log(allTodos)
        res.status(200).json(allTodos)
        // res.json(allTodos)
    } catch (error) {
        res.status(401).json({
            success: false,
            message: e.message
        })
    }
} 

