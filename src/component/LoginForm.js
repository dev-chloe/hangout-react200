import React, { Component } from "react";
import logo from '../img/logo.png';

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
          {/* <img src={require("../img/logo.png").default} alt="chloe"/>  */}
          <img src={logo} alt="chloe"/> 
        </div>
      </div>
    )
  }
}

export default LoginForm;

/*
  <img src={require("../img/logo.png")} alt="chloe"/>
  이미지가 로딩이 되지 않는다.

  <img src={require("../img/logo.png").default} alt="chloe"/>
  require()함수에 .default를 추가해 주니 로딩이 된다.
  require만 붙이면 이미지가 아닌 객체로 return 되기 때문에
  .default를 추가해 이미지 자체를 불러온다.

  import를 해서 이미지를 불러올 수도 있다.
  */