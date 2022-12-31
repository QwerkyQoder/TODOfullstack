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

  return (
<div class="container">
  <div class="row">
    <div class="col-12">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Todo Title</th>
            <th scope="col">Tasks</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bootstrap 4 CDN and Starter Template</td>
            <td>2.846</td>
            <td>
              <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></button>
              <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  )
}

export default TodoList