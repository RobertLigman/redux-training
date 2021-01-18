import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      onClick={props.clicked}
      className={props.warning ? classes.Warning : null}>
      {props.buttonName}
    </button>
  );
};
export default Button;
