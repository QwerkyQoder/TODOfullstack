const Todo = require("../model/Todo");

exports.createTodoController = async (req,res) => {
    // TODO: Check for Duplicate TODO
    // TODO: Error Handling
    const {title, tasks} = req.body
    console.log(req.body)
    try {
        const newTodo = await Todo.create ({title, tasks})
        console.log(newTodo)
        res.json(newTodo)        
    } catch (error) {
        console.log(error.message)   
    }

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

