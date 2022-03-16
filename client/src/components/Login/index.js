import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
//import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';


function Login(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { username: formState.username, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Modal 
    {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    className="container my-1">
      {/* <Button onClick={() => setLoginModalShow(false), setSignupModalShow(true)} >Need an account?</Button> */}

      <Modal.Title>Login</Modal.Title>
      <Modal.Body>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Username:</label>
          <input
            placeholder="username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;