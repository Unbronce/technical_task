import React from "react";
import classes from "./styles.module.css";

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <h1 className={classes.Caption}>Technical task for Yalantis</h1>
    </header>
  );
};

export default Header;
