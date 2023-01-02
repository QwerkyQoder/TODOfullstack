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
  }, [Object.values(todoData)]);

  const handleEditTodo = async (todo) => {
    const newtodo=prompt("Enter new Todo")
    if(newtodo) {
      const resp = await axios.put(`/editTodo/${todo.id}`, {
        todo:newtodo
      })
    }
  }

  const handleEditTask = async (task) => {
    const newtask=prompt("Enter new Task")
    if(newtask) {
      const resp = await axios.put(`/editTask/${task.id}`, {
        task:newtask
      })
    }
  }


  const handleDelTodo = async (todoId) => {
    console.log("Handle Delete TODO")
    console.log(todoId)
    const resp = await axios.delete(`/deleteTodo/${todoId}`)
    console.log(resp)
}

  return (
<div class="container">
  <div class="row">
    <div class="col-12">
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
                <p>{element}</p>
                <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>  
              </div>
             ))
           }
           </td>


            <td>
              {/* <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></button> */}
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
