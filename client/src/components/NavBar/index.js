import React from 'react';

const NavBar = () => {
    return (
        <>
        <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li className="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="#" class="nav-link">About</a></li>
        </ul>
        </>
    )
}

export default NavBar;