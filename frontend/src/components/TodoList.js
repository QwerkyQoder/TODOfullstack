import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TodoList = () => {
  const [todoData, setTodoData] = useState(null);

  const getdata = async () => {
      const resp = await axios.get("/getTodos")
      console.log("resp",resp)

      if(resp.data.length > 0) {
        setTodoData(resp.data)
      }
    }  

  // Avoid aync await inside USeEffect
  useEffect(() => {
    getdata();
  }, []);

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

  return (
<div class="container">
  <div class="row">
    <div class="col-12">
      <p></p>
      <table class="table table-bordered">
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
                <button type="button" class="btn btn-danger"
                onClick={() => handleDelTask(todo, element)}><i class="far fa-trash-alt"></i></button>  
                </p>
              </div>
             ))
           }
           </td>


            <td>
              <button type="button" class="btn btn-primary"
              onClick={() => handleAddTask(todo)}><i class="fas fa-plus"></i></button>
              <button type="button" class="btn btn-success"
              onClick={() => handleEditTodo(todo)}><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger"
            onClick={() => handleDelTodo(todo._id)}><i class="far fa-trash-alt"></i></button>
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