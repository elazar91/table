import React from "react";

import classes from "./Backdrop.module.css";

const backdrop = ({ show, modalStatus }) =>
  show && <div className={classes.Backdrop} onClick={modalStatus}></div>;

export default backdrop;
