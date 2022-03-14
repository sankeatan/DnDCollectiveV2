import React from 'react';

const CharBuildOptionBtns = () => { 

<nav className="navbar navbar-expand-lg-build navbar-light buildnav">
    <div class="collapse navbar-collapse-build" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item-build active">
        <button class="nav-link" href="#">Race</button>
        </li>
        <li class="nav-item-build ">
        <button class="nav-link" href="#">Class</button>
        </li>
        <li class="nav-item-build ">
        <button class="nav-link disabled" href="#">Ability Scores</a>
        </li>
        <li class="nav-item-build ">
        <a class="nav-link disabled" href="#">Languages</a>
        </li>
        <li class="nav-item-build ">
            <a class="nav-link disabled" href="#">Proficiencies</a>
        </li>
        <li class="nav-item-build ">
            <a class="nav-link disabled" href="#">Feats</a>
        </li>
        <li class="nav-item-build ">
            <a class="nav-link disabled" href="#">Inventory</a>
        </li>
    </ul>
    </div>
</nav>

};

export default CharBuildOptionBtns;