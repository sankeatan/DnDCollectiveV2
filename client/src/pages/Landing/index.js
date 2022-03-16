import React, { useState }from 'react';
import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../../utils/queries';
import '../Landing/style.css';
import Login from '../../components/Login';
//import Signup from '../../components/Signup';
import video from '../../assets/videos/ship.mp4'
import Auth from '../../utils/auth';


const Landing = () => {

 const [loginModalShow, setLoginModalShow] = useState(false);
 //const [signupModalShow, setSignupModalShow] = React.useState(false);

        return (
            <div>
                <div className="videoContainer">
                    <div className="videoWrapper">
                    <video autoPlay muted loop id="Video">
                    <source className="video" src={video} type="video/mp4">
                    </source>
                    </video>
                    </div>
                </div>
                <div className="content">
                    <h1>D&D</h1>
                    <h1 className="secondH1">Beyond</h1>
                    {Auth.loggedIn() ? (
                    <>
                    <p>Welcome Back {Auth.getProfile().data.username}</p>
                    <Link to="/home" className="button">Continue Your Adventure</Link>
                    </>
                    ) : (
                    <>
                    <p>Your Journey Starts Now</p>
                    <button onClick={() => setLoginModalShow(true)} className="button">Log In</button>
                    <Login
                        show={loginModalShow}
                        onHide={() => setLoginModalShow(false)}
                    />
                    {/* <Link onClick={() => setSignupModalShow(true)} className="button">Sign Up</Link>
                    <Signup
                        show={signupModalShow}
                        onHide={() => setSignupModalShow(false)}
                    /> */}
                    </>)}
                </div>
            </div>
        );
    };

export default Landing;