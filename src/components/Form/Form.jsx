import React, { useState } from "react";
import classes from "./Form.module.css";
import Input from "../Input/Input";

const Form = ({ addUser, hideForm, userToEdit, editMode, updateUser }) => {
  const [name, setName] = useState(userToEdit?.name || "");
  const [lastName, setLastName] = useState(userToEdit?.lastName || "");
  const [age, setAge] = useState(userToEdit?.age || 0);
  const [address, setAddress] = useState(userToEdit?.address || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000) + 1;
    let user;

    if (editMode) {
      user = {
        id: userToEdit.id,
        name,
        lastName,
        age,
        address,
      };
      updateUser(user);
    } else {
      user = {
        id,
        name,
        lastName,
        age,
        address,
      };
      addUser(user);
    }
    clearForm();
    hideForm();
  };

  const clearForm = () => {
    setName("");
    setLastName("");
    setAge(0);
    setAddress("");
  };

  const change = (e, setElement) => {
    setElement(e.target.value);
  };

  return (
    <div className={classes.Container}>
      <form>
        <Input
          type={"text"}
          placeholder={"NAME"}
          value={name}
          change={change}
          setElement={setName}
        />
        <Input
          type={"text"}
          placeholder={"LAST NAME"}
          value={lastName}
          change={change}
          setElement={setLastName}
        />
        <Input
          type={"number"}
          placeholder={"AGE"}
          value={age}
          change={change}
          setElement={setAge}
          min="10"
          max="100"
        />
        <Input
          type={"text"}
          placeholder={"ADDRESS"}
          value={address}
          change={change}
          setElement={setAddress}
        />
        {/* <input
          type="text"
          placeholder="NAME"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="LAST NAME"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="AGE"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="ADDRESS"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        /> */}
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
