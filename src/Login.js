import React from 'react';

function Login () {
    return (
        <div className="card">
            <div className="card-body login-page">
                <h3>Login </h3>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
            
                </div>
                <button type="submit" className="btn btn-secondary btn-block">Sign In</button>
            
                <p className="mt-3">
                    Don't have an account? <a href="https://google.com">
                    Sign up here</a>
                </p>
            </form>

            </div>
          
        </div>
    );
}

export default Login;