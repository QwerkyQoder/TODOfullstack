const express = require("express")
const router = express.Router();
const {home} = require("../controllers/userController")
const {createTodoController} = require("../controllers/createTodoController")
const {createTaskController} = require("../controllers/createTaskController")
const {getTodosController} = require("../controllers/getTodosController")
const {delTodoController} = require("../controllers/deleteTodosController")

router.get("/", home)
router.post("/createTodo", createTodoController);
router.put("/createTask/:id", createTaskController)
router.get("/getTodos", getTodosController)
router.delete("/deleteTodo/:id", delTodoController)

module.exports = router;