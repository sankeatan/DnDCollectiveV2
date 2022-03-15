import React from 'react';
import { Link } from 'react-router-dom';
import '../Landing/style.css';
import video from '../../assets/videos/ship.mp4'

import Auth from '../../utils/auth';

const Landing = () => {

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
                    <Link to="/home" className="button1">Continue Your Adventure</Link>
                    </>
                    ) : (
                    <>
                    <p>Your Journey Starts Now</p>
                    <button onClick = {()=> Auth.login()} className="button1">Log In</button>
                    <Link to="/signup" className="button2">Sign Up</Link>
                    </>)}
                </div>
            </div>
        );
    };

export default Landing;