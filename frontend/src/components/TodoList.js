import React from 'react'

const TodoList = () => {
  return (
    <div class='m-5'>
    <ul class="list-group list-group-numbered m-5">
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Subheading</div>
        Content for list item
      </div>
      <span class="badge bg-primary rounded-pill">14</span>
    </li>
  </ul>

    </div>
  )
}

export default TodoList