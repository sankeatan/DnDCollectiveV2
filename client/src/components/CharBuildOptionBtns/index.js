import React from 'react';

const CharBuildOptionBtns = () => {
    return (

<nav className="navbar navbar-expand-lg-build navbar-light buildnav">
    <div className="collapse navbar-collapse-build" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item-build active">
        <button className="nav-link" href="#">Race</button>
        </li>
        <li className="nav-item-build ">
        <button className="nav-link" href="#">Class</button>
        </li>
        <li className="nav-item-build ">
        <button className="nav-link disabled" href="#">Ability Scores</button>
        </li>
        <li className="nav-item-build ">
        <button className="nav-link disabled" href="#">Languages</button>
        </li>
        <li className="nav-item-build ">
            <button className="nav-link disabled" href="#">Proficiencies</button>
        </li>
        <li className="nav-item-build ">
            <button className="nav-link disabled" href="#">Feats</button>
        </li>
        <li className="nav-item-build ">
            <button className="nav-link disabled" href="#">Inventory</button>
        </li>
    </ul>
    </div>
</nav>



);

};

export default CharBuildOptionBtns;