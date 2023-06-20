import React, { useEffect, useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

const User = () => {

    const [login, setLogin] = useState(true)

    const handleLogin = () =>{
        setLogin(!login)
    }

    return (
    <div class="container">
    <h1 className='text-center fw-light pt-5'>Welcome to Todo App</h1>
    {login && 
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>
            <form>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              {/* <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label class="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div> */}
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                    Login</button>
              </div>
              <hr class="my-4"/>
              <div class="d-grid mb-2">
                    <p>New Member?</p>
                    <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit"  onClick={handleLogin}>
                  Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
}
{/* ======================================================== */}
{!login && 
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>
            <form>

                <div class="form-floating mb-3">
                <input type="name" class="form-control" id="floatingInput" placeholder="Full Name"/>
                <label for="floatingInput">Full Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              {/* <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label class="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div> */}
              <div class="d-grid">
                <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                    Register</button>
              </div>
              <hr class="my-4"/>
              <div class="d-grid mb-2">
                    <p>Already a Member?</p>
                    <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit" onClick={handleLogin}>
                  Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
}
  </div>
    )
}

export default User;