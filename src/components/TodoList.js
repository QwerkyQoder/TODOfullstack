import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext, useAuth } from './Context';
import { useNavigate } from 'react-router';

const TodoList = () => {
  const navigate = useNavigate();
  const [todoData, setTodoData] = useState(null);
  // const t = useContext(AuthContext)
  const {token, setToken} = useAuth()

  const bearer_token = `Bearer ${ token}`;
    const config = {
      headers: {
        Authorization: bearer_token
      }
    }
  const [email, setEmail] = useState("")
    
  const getdata = async () => {

      const resp = await axios.get("/getTodos", config)
      console.log("resp",resp)

      if(resp.data.length > 0) {
        setTodoData(resp.data)
      }
      else {
        setTodoData([])
        alert("No todos. Add new ones")
      }

    }  

  // Avoid aync await inside USeEffect
  useEffect(() => {
    const local_token = localStorage.getItem("token")
    setToken(local_token)
    console.log("token",token)
    const local_email = localStorage.getItem("user")
    setEmail(local_email)
    getdata();
  }, [token]);

  const handleEditTodo = async (todo) => {
    const newtodo=prompt("Enter new Todo")
    if(newtodo) {
      const data = {
        title:newtodo
      }
      const resp = await axios.put(`/editTodo/${todo._id}`, data, config)
      console.log(resp)
    }
    getdata();
  }

  const handleAddTask = async (todo) => {
    const newtask=prompt("Enter new Task")
    if(newtask) {
      const resp = await axios.put(`/createTask/${todo._id}`, {
        text:newtask
      }, config)
      console.log(resp)
    }
    getdata();
  }


  const handleDelTask = async (todo, task) => {
      console.log(todo)
      console.log(task)
      const resp = await axios.put(`/delTask/${todo._id}`, {
        task:task
      }, config)
      console.log(resp)
      getdata();
  }


  const handleDelTodo = async (todoId) => {
    console.log("Handle Delete TODO")
    console.log(todoId)
    const resp = await axios.delete(`/deleteTodo/${todoId}`, config)
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
        const res = await axios.post("/createTodo", data, config)
        console.log(res)
        getdata()
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        submitData();
        setTodo("");
        setTask("");
    }

    const handleLogout = async () => {
      const resp = await axios.post("/logout","" ,config)
      console.log(resp)
      if(resp.status === 200) {
        localStorage.setItem("token", "")
        localStorage.setItem("user", "")
        setToken(null)
        console.log("token", token)
      }
      else {
        alert("Logout unsuccessful")
      }
      navigate("/")
    }

  return (
<div className="container">
  <nav class="navbar navbar-expand-lg navbar-light ">
    <h3 class="navbar-brand">{email}</h3>
    <button class="btn btn-primary m-5 my-2 my-sm-0 ms-auto "
    onClick={handleLogout}>Logout</button>
  </nav>

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
                <button type="button " className="btn btn-danger btn-sm m-1"
                onClick={() => handleDelTask(todo, element)}>Del</button>  
                </p>
              </div>
             ))
           }
           </td>


            <td>
              <button type="button" className="btn btn-primary m-1"
              onClick={() => handleAddTask(todo)}>
                Add</button>
              <button type="button" className="btn btn-success m-1"
              onClick={() => handleEditTodo(todo)}>Edit</button>
            <button type="button" className="btn btn-danger m-1"
            onClick={() => handleDelTodo(todo._id)}>Del</button>
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