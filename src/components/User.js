import React, { useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import axios from 'axios'
import { useNavigate } from 'react-router';

import {useAuth} from './Context'

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

const User = () => {
    const navigate = useNavigate();

    const [login, setLogin] = useState(true)
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })  

    const {token, setToken} = useAuth('')

    const handleLogin = () =>{
        setLogin(!login)
    }

    const LoginHandler = async (e) => {
        e.preventDefault();
        console.log(user)
        const resp = await axios.post("/login", JSON.stringify({
            username:user.name,
            email:user.email,
            password:user.password
          }) , axiosConfig);
        console.log(resp);
        if(resp.status === 200) {
            setToken(resp.data.token)
            console.log(token)
            localStorage.setItem("token", resp.data.token)
            localStorage.setItem("user", user.email)
            navigate('/todos')
        }
        else {
        alert("Login failed")
        }
    }

    const RegisterHandler = async (e) => {
        e.preventDefault();
        console.log(user)
        const resp = await axios.post("/register", JSON.stringify({
            username:user.name,
            email:user.email,
            password:user.password
          }) , axiosConfig);
        console.log(resp);
        if(resp.status === 200) {
            setToken(resp.data.token)
            console.log(token)
            localStorage.setItem("token", resp.data.token)
            localStorage.setItem("user", user.email)
            navigate('/todos')
        }
        else {
        alert("Register failed")
        }
    }

    return (

            <div className="container">
            <h1 className='text-center fw-light pt-5'>Welcome to Todo App  </h1>
                {login && 
                <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                    <div className="card-body p-4 p-sm-5">
                        <h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
                        <form onSubmit={LoginHandler}>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                            onChange={(e) => setUser({ ...user, email: e.target.value })}/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        {/* <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                            <label class="form-check-label" for="rememberPasswordCheck">
                            Remember password
                            </label>
                        </div> */}
                        <div className="d-grid">
                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                                Login</button>
                        </div>
                        <hr className="my-4"/>
                        <div className="d-grid mb-2">
                                <p>New Member?</p>
                                <button className="btn btn-primary btn-login text-uppercase fw-bold" onClick={handleLogin}>
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
                <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                    <div className="card-body p-4 p-sm-5">
                        <h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
                        <form onSubmit={RegisterHandler}>

                            <div className="form-floating mb-3">
                            <input type="name" className="form-control" id="floatingInput" placeholder="Full Name"
                            onChange={(e) => setUser({ ...user, name: e.target.value })}/>
                            <label htmlFor="floatingInput">Full Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                            onChange={(e) => setUser({ ...user, email: e.target.value })}/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        {/* <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                            <label class="form-check-label" for="rememberPasswordCheck">
                            Remember password
                            </label>
                        </div> */}
                        <div className="d-grid">
                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" >
                                Register</button>
                        </div>
                        <hr className="my-4"/>
                        <div className="d-grid mb-2">
                                <p>Already a Member?</p>
                                <button className="btn btn-primary btn-login text-uppercase fw-bold" onClick={handleLogin}>
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