import React, { useState } from 'react'

const Form = () => {

    const [todo, setTodo] = useState("")
    const[task, setTask] = useState("")

    const handleSubmit = (event) =>{
        event.preventDefault();
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
  <div class="m-5">
    <label for="exampleInputTodo1" class="form-label">Todo Title</label>
    <input type="text" class="form-control" id="exampleInputTodo1"/>
  </div>
  <div class="m-5">
    <label for="exampleInputTask1" class="form-label">Task</label>
    <input type="text" class="form-control" id="exampleInputTaskword1"/>
  </div>
  <button type="submit" class="btn btn-primary m-5">Submit</button>
</form>
  </div>
  )
}

export default Form