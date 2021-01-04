import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ userToModal, show, modalStatus }) => {
  return (
    <div>
      <Backdrop show={show} modalStatus={modalStatus} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {userToModal && (
          <div>
            <div>user name: {userToModal.name}</div>
            <div>user last name: {userToModal.lastName}</div>
            <div>user age: {userToModal.age}</div>
            <div>user address: {userToModal.address}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
