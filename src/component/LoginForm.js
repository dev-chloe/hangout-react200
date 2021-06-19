import React, { Component } from "react";

class LoginForm extends Component {
  render () {
    return (
      <div className="login">
        <div className="login_box">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="id" />
            <input type="password" placeholder="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;