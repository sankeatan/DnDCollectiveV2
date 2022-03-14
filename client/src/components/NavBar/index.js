import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <ul className="nav nav-pills">
        <li className="nav-item"><Link href="#" className="nav-link active" aria-current="page">Home</Link></li>
        <li className="nav-item"><Link href="#" className="nav-link">Features</Link></li>
        <li className="nav-item"><Link href="#" class="nav-link">Pricing</Link></li>
        <li className="nav-item"><Link href="#" class="nav-link">FAQs</Link></li>
        <li className="nav-item"><Link href="#" class="nav-link">About</Link></li>
        </ul>
        </>
    )
}

export default NavBar;