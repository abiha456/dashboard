import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [firstName, setFirstName] = useState ()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [resetPass, setResetPass] = useState()
    const [error, setError] = useState();
    const [passError, setPassError] = useState();
    const navigate = useNavigate();

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePass = (e) => {
        setPass(e.target.value);
    }
    const handleResetPass = (e) => {
        setResetPass(e.target.value);
    }

    var retrieve = JSON.parse(localStorage.getItem("userData"));

    const handleSubmit = (e) => {
        e.preventDefault()

        if(firstName === '' || email === '' || pass === '' || resetPass === '') {
            setError('Fields are required');
            return false;
        }
        else {
            setError('');
        }

        if(resetPass !== pass) {
            setPassError('Please enter the same password')
        }

        var newUser = retrieve != null ? retrieve : [];
        var userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            pass: pass
        }
        newUser.push(userData)

        userData= JSON.stringify(newUser)
        localStorage.setItem('userData', userData);

        navigate("/")
    }

    return (
        <div class="bg-gradient-primary">
            <div class="container">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div class="col-lg-7">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input 
                                                type="text"
                                                class="form-control form-control-user"
                                                id="exampleFirstName"
                                                onChange={handleFirstName}
                                                value={firstName}
                                                placeholder="Enter First Name" />
                                            </div>
                                            <div class="col-sm-6">
                                                <input 
                                                type="text"
                                                class="form-control form-control-user"
                                                id="exampleLastName"
                                                onChange={handleLastName}
                                                value={lastName}
                                                placeholder="Enter Last Name" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input 
                                            type="email" 
                                            class="form-control form-control-user" 
                                            id="exampleInputEmail"
                                            onChange={handleEmail}
                                            value={email}
                                            placeholder="Enter Email Address" />
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input 
                                                type="password" 
                                                class="form-control form-control-user"
                                                id="exampleInputPassword"
                                                onChange={handlePass}
                                                value={pass}
                                                placeholder="Password" />
                                            </div>
                                            <div class="col-sm-6">
                                                <input 
                                                type="password" 
                                                class="form-control form-control-user"
                                                id="exampleRepeatPassword"
                                                onChange={handleResetPass}
                                                value={resetPass}
                                                placeholder="Confirm Password" />
                                                {passError && <div class="text-danger mt-2">
                                                    {passError}
                                                </div>}
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-user btn-block">
                                            Register Account
                                        </button>
                                        {error && <div class="alert alert-danger mt-2" role="alert">
                                            {error}
                                        </div>}
                                    </form>
                                    <div class="text-center">
                                        <Link class="small" to="/">Already have an account? Login!</Link>
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

export default Register;