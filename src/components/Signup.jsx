import React from "react";

function Signup(){
    return(
        <form>
            <h3>signup to get sarted</h3>
            <label htmlFor="Email">
                Email:
                <input type="text" name="email" />
            </label>
            <label htmlFor="name">
                Name:
                <input type="text" name="name" />
            </label>
            <label htmlFor="password">
                Password:
                <input type="password" name="password" />
            </label>
            <button>sign up</button>
            <p>Already have an account? <a href="">sign in here</a></p>
        </form>
    )
}

export default Signup;