import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom home-header">
    <Link className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
    <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    <span className="fs-4">D&D Beyond</span>
    </Link>

    <ul class="nav nav-pills">
    <li class="nav-item"><Link href="#" class="nav-link active" aria-current="page">Home</Link></li>
    <li class="nav-item"><Link href="#" class="nav-link">Features</Link></li>
    <li class="nav-item"><Link href="#" class="nav-link">Pricing</Link></li>
    <li class="nav-item"><Link href="#" class="nav-link">FAQs</Link></li>
    <li class="nav-item"><Link href="#" class="nav-link">About</Link></li>
    </ul>
    </header>
  );
};

export default Header;
