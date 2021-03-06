import { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [emailAdd, setEmailAdd] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState()
    const [loginError, setLoginError] = useState()
    const navigate = useNavigate();


    const getEmail = (e) => {
        setEmailAdd(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    var retrieve = JSON.parse(localStorage.getItem("userData"));
    // console.log(retrieve)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (emailAdd === "" || password === "") {
            setError("Fields are required");
            return false;
        }
        else {
            setError('')
        }

        if(retrieve !== '') {
            for(var user of retrieve) {
                if(emailAdd === user.email && password === user.pass){ // matching the values of login user with retrieve 
                    var loggedInUser={ // creating a new object of logged in user
                        'loginName':user.firstName  +  user.lastName,
                        'loginEmail':user.email,
                        'loginPass':user.password
                    };
                    loggedInUser=JSON.stringify(loggedInUser);
                    localStorage.setItem('loggedInUser' , loggedInUser); // saving the object of logged in user in local storage                        
                    console.log(loggedInUser)

                    navigate("/admin/dashboard");

                }
               else {
                setLoginError("Email or Password incorrect");
               }
            }
        }
        else {
            console.log('data not found!')
        }
    }

    return (
        <div className="bg-gradient-primary">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input type="email" 
                                                    className="form-control form-control-user"
                                                    id="exampleInputEmail" 
                                                    aria-describedby="emailHelp"
                                                    onChange={getEmail}
                                                    value={emailAdd}
                                                    placeholder="Enter Email Address" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" 
                                                    className="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    onChange={getPassword}
                                                    value={password}
                                                    placeholder="Enter Password" />
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                                    Login
                                                </button>
                                                {error && <div class="alert alert-danger mt-2" role="alert">
                                                    {error} 
                                                </div>}
                                                {loginError && <div class="alert alert-danger mt-2" role="alert">
                                                    {loginError}
                                                </div>}
                                            </form>
                                            <div className="text-center">
                                                <Link className="small" to="/register">Create an Account!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;