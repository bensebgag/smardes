import React from "react";
import "./Field.scss";
function Field({ name, type }) {
  return (
    <div className="containerField">
      <label>{name}</label>
      <input type={type} />
    </div>
  );
}

export default Field;
