import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createInput,
  readInput,
  updateInput,
  deleteInput,
} from './inputActions';
import './MyComponent.css';

const MyComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.inputs);

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleCreateInput = () => {
    const userInput = {
      id,
      name,
      email,
      contact,
    };

    dispatch(createInput(userInput));
  };

  const handleReadInput = (id) => {
    dispatch(readInput(id));
  };

  const handleUpdateInput = (id) => {
    const updatedUser = {
      id,
      name,
      email,
      contact,
    };
    dispatch(updateInput(updatedUser));
   // clearForm();
  };
  

  const handleDeleteInput = (id) => {
    dispatch(deleteInput(id));
  };

  return (
    <div>
      <div className="form-container">
        <h1>Contact Book</h1>
        <div className="form-group">
          <label>ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Contact:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <button onClick={handleCreateInput}>Create User</button>
      </div>

      <div className="user-list">
        <h3>User's Contact List</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>
                  <button onClick={() => handleReadInput(user.id)}>Read</button>
                  <button onClick={() => handleUpdateInput(user.id)}>Update</button>
                  <button className="delete" onClick={() => handleDeleteInput(user.id)}>
                         Delete
                    </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyComponent;
