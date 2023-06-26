import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from './Context';

const TodoList = () => {
  const [todoData, setTodoData] = useState(null);
  const t = useContext(AuthContext)
  const getdata = async () => {
      const resp = await axios.get("/getTodos")
      console.log("resp",resp)

      if(resp.data.length > 0) {
        setTodoData(resp.data)
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
    // getdata();
  }, [t]);

  const handleEditTodo = async (todo) => {
    const newtodo=prompt("Enter new Todo")
    if(newtodo) {
      const resp = await axios.put(`/editTodo/${todo._id}`, {
        title:newtodo
      })
      console.log(resp)
    }
    getdata();
  }

  const handleAddTask = async (todo) => {
    const newtask=prompt("Enter new Task")
    if(newtask) {
      const resp = await axios.put(`/createTask/${todo._id}`, {
        text:newtask
      })
      console.log(resp)
    }
    getdata();
  }


  const handleDelTask = async (todo, task) => {
      console.log(todo)
      console.log(task)
      const resp = await axios.put(`/delTask/${todo._id}`, {
        task:task
      })
      console.log(resp)
      getdata();
  }


  const handleDelTodo = async (todoId) => {
    console.log("Handle Delete TODO")
    console.log(todoId)
    const resp = await axios.delete(`/deleteTodo/${todoId}`)
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
        const res = await axios.post("/createTodo", data)
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
                onClick={() => handleDelTask(todo, element)}><i classNamex="far fa-trash-alt"></i></button>  
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