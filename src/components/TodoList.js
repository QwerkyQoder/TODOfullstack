import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from './Context';

const TodoList = () => {
  const [todoData, setTodoData] = useState(null);
  const t = useContext(AuthContext)
  const bearer_token = `Bearer ${t.token}`;
    const config = {
      headers: {
        Authorization: bearer_token
      }
    }
  const getdata = async () => {
    
      const resp = await axios.get("http://127.0.0.1:4000/getTodos", config)
      console.log("resp",resp)

      if(resp.data.length > 0) {
        setTodoData(resp.data)
      }
      else {
        alert("No todos. Add new ones")
      }
    }  

  // Avoid aync await inside USeEffect
  useEffect(() => {
    if(!t.token){
      console.log("Token not found")
      t.setToken(localStorage.getItem("token"))
      console.log("token",t)
    }
    else {
    console.log("token",t)}
    getdata();
  }, [t]);

  const handleEditTodo = async (todo) => {
    const newtodo=prompt("Enter new Todo")
    if(newtodo) {
      const data = {
        title:newtodo
      }
      const resp = await axios.put(`http://127.0.0.1:4000/editTodo/${todo._id}`, data, config)
      console.log(resp)
    }
    getdata();
  }

  const handleAddTask = async (todo) => {
    const newtask=prompt("Enter new Task")
    if(newtask) {
      const resp = await axios.put(`http://127.0.0.1:4000/createTask/${todo._id}`, {
        text:newtask
      }, config)
      console.log(resp)
    }
    getdata();
  }


  const handleDelTask = async (todo, task) => {
      console.log(todo)
      console.log(task)
      const resp = await axios.put(`http://127.0.0.1:4000/delTask/${todo._id}`, {
        task:task
      }, config)
      console.log(resp)
      getdata();
  }


  const handleDelTodo = async (todoId) => {
    console.log("Handle Delete TODO")
    console.log(todoId)
    const resp = await axios.delete(`http://127.0.0.1:4000/deleteTodo/${todoId}`, config)
    console.log(resp)
    getdata();
}

const [todo, setTodo] = useState("")
    const[task, setTask] = useState("")

    const submitData = async () => {
        const data  = {
            title: todo,
            tasks: task
        };
        const res = await axios.post("http://127.0.0.1:4000/createTodo", data, config)
        console.log(res)
        getdata()
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        submitData();
        setTodo("");
        setTask("");
    }

  return (
<div className="container">
  <AuthContext.Consumer>{value=> {<h1>Token {value}</h1>}}</AuthContext.Consumer>
<div>
        <form onSubmit={handleSubmit}>
  <div className="m-5">
    <label htmlFor="exampleInputTodo1" className="form-label">Todo Title</label>
    <input type="text" className="form-control" id="exampleInputTodo1"
    value={todo} onChange={(event) => setTodo(event.target.value)} />
  </div>
  <div className="m-5">
    <label htmlFor="exampleInputTask1" className="form-label">Task</label>
    <input type="text" className="form-control" id="exampleInputTaskword1"
    value={task} onChange={(event) => setTask(event.target.value)} />
  </div>
  <button type="submit" className="btn btn-primary m-5">Submit</button>
</form>
  </div>
  <div className="row">
    <div className="col-12">
      <p></p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Todo Title</th>
          </tr>
        </thead>
        <tbody>
          {todoData && todoData.map((todo) => (
            <tr key={todoData._id}>
            <td>{todo.title}</td>

            <td>
             { todo.tasks && todo.tasks.map(element => (
              <div key={element._id}>
                <p>{element}
                <button type="button" className="btn btn-danger"
                onClick={() => handleDelTask(todo, element)}><i className="far fa-trash-alt"></i></button>  
                </p>
              </div>
             ))
           }
           </td>


            <td>
              <button type="button" className="btn btn-primary"
              onClick={() => handleAddTask(todo)}><i className="fas fa-plus"></i></button>
              <button type="button" className="btn btn-success"
              onClick={() => handleEditTodo(todo)}><i className="fas fa-edit"></i></button>
            <button type="button" className="btn btn-danger"
            onClick={() => handleDelTodo(todo._id)}><i className="far fa-trash-alt"></i></button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
  )
}

export default TodoList;