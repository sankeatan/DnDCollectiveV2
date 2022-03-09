import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    // <main classNameName="flex-row justify-center mb-4">
    //   <div classNameName="col-10 col-lg-10">
    //     <div classNameName="card">
    //       <h4 classNameName="card-header bg-dark text-light p-2">Login</h4>
    //       <div classNameName="card-body">
    //         {data ? (
    //           <p>
    //             Success! You may now head{' '}
    //             <Link to="/">back to the homepage.</Link>
    //           </p>
    //         ) : (
    //           <form onSubmit={handleFormSubmit}>
    //             <input
    //               classNameName="form-input"
    //               placeholder="Your email"
    //               name="email"
    //               type="email"
    //               value={formState.email}
    //               onChange={handleChange}
    //             />
    //             <input
    //               classNameName="form-input"
    //               placeholder="******"
    //               name="password"
    //               type="password"
    //               value={formState.password}
    //               onChange={handleChange}
    //             />
    //             <button
    //               classNameName="btn btn-block btn-primary"
    //               style={{ cursor: 'pointer' }}
    //               type="submit"
    //             >
    //               Submit
    //             </button>
    //           </form>
    //         )}

    //         {error && (
    //           <div classNameName="my-3 p-3 bg-danger text-white">
    //             {error.message}
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </main>
    <div className="main-w3layouts wrapper">
      <h1>Login</h1>
      <div className="main-agileinfo">
        <div className="agileits-top">
          <div classNameName="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input id="email-login" className="form-input" type="email" placeholder="Your email" required="" name="email" value={formState.email} onChange={handleChange} />
                <input id="password-login" className="form-input" type="password" placeholder="******"
                  required="" name="password" value={formState.password} onChange={handleChange} />
                <div className="wthree-text">
                  <div className="clear"> </div>
                </div>
                <input id="loginButton" type="submit" value="LOGIN" />
                <div className="d-none" id="submitSuccessMessage"></div>
                <div className="d-none" id="submitErrorMessage"></div>
              </form>
            )}
            <p>Don't have an Account? <a href="signup" type='submit'> Sign up Now!</a></p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
