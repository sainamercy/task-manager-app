import React from "react";

function Login(){
    return(
        <form>
            <label htmlFor="email">
                Email:
                <input type="text" name="email" id="email" />
            </label>
            <label htmlFor="password">
                Password:
                <input type="password" name="password" id="password" />
            </label>
            <button>log in</button>
            <p>Don't have an account? <a href="">sign up here</a></p>
        </form>
    )
}

export default Login;