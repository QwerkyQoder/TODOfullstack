import React, { useState } from 'react'
import axios from "axios"

const Form = () => {

    const [todo, setTodo] = useState("")
    const[task, setTask] = useState("")

    const submitData = async () => {
        const data  = {
            title: todo,
            tasks: task
        };
        const res = await axios.post("/createTodo", data)
        console.log(res)
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        submitData();
        setTodo("");
        setTask("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
  <div class="m-5">
    <label for="exampleInputTodo1" class="form-label">Todo Title</label>
    <input type="text" class="form-control" id="exampleInputTodo1"
    value={todo} onChange={(event) => setTodo(event.target.value)} />
  </div>
  <div class="m-5">
    <label for="exampleInputTask1" class="form-label">Task</label>
    <input type="text" class="form-control" id="exampleInputTaskword1"
    value={task} onChange={(event) => setTask(event.target.value)} />
  </div>
  <button type="submit" class="btn btn-primary m-5">Submit</button>
</form>
  </div>
  )
}

export default Form