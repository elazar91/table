import './App.css';
import { useState } from 'react';
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [showform, setShowForm] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [userToModal, setUserToModal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false)

  const addUser = (user) => {
    setUsers(prev => [...prev, user])
    setEditMode(false)
    setUserToEdit(null)
  }

  const deleteUser = (userId) => {
    setUsers(prev => prev.filter(user => userId !== user.id))
    setUserToModal(null)
  }

  const revealForm = () => {
    setShowForm(!showform)
  }


  const editUser = (userId) => {
    const [filteredUser] = users.filter((user) => user.id === userId);
    setEditMode(true)
    setUserToEdit(filteredUser);
    revealForm()
  }

  const modalStatus = () => {
    setShowModal(!showModal);
  }

  const sendUserToModal = (userId) => {
    const [filteredUser] = users.filter((user) => user.id === userId);
    setUserToModal(filteredUser);
    setShowModal(true)
  }

  console.log('app user to modal:', userToModal)

  const updateUser = (updatedUser) => {
    setUsers(prev => prev.map(user => {
      if(user.id === updatedUser.id) {
        user = updatedUser
      }
      return user;
    })
    )
    setEditMode(false);
    setUserToEdit(null)
  }

  return (
    <div className="App">
      <Modal show={showModal} modalStatus={modalStatus} userToModal={userToModal} />
      <h1>USERS FORM</h1>
      <button onClick={revealForm}>add user</button>
      {showform && <Form addUser={addUser} hideForm={revealForm} userToEdit={userToEdit} editMode={editMode} updateUser={updateUser} />}
      <Table 
        users={users} 
        deleteUser={deleteUser} 
        editUser={editUser} 
        sendUserToModal={sendUserToModal} />
    </div>
  );
}

export default App;
