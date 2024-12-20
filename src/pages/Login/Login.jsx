import React from "react";
import Field from "../../components/Field/Field";
import "./Login.scss";
import Button from "../../components/Button/Button";
function Login() {
  return (
    <div className="fullPage">
      <div className="image"></div>
      <div className="backg"></div>
      <div className="container-form">
        <form className="form">
          <Field name="Email" type="email" />
          <Field name="Password" type="password" />
        </form>
        <Button nameButton="Login" />
      </div>
    </div>
  );
}

export default Login;
