import React from "react";
import "./Button.scss";
function Button({ nameButton }) {
  return <button className="btn">{nameButton}</button>;
}

export default Button;
