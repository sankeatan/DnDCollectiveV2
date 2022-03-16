import React, { useState, createContext } from 'react';

const choiceContext = createContext();

const CharBuildOptionBtns = () => {

    const [navChoice, setNavChoice] = useState("Race");

    return (

<nav className="navbar navbar-expand-lg-build navbar-light buildnav">
    <div className="collapse navbar-collapse-build" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item-build active">
        <button onClick={()=>setNavChoice('Race')} className="nav-link" href="#">Race</button>
        </li>
        <li className="nav-item-build ">
        <button onClick={()=>setNavChoice('Class')} className="nav-link" href="#">Class</button>
        </li>
        <li className="nav-item-build ">
        <button onClick={()=>setNavChoice('AbilityScores')} className="nav-link disabled" href="#">Ability Scores</button>
        </li>
        <li className="nav-item-build ">
        <button onClick={()=>setNavChoice('Languages')} className="nav-link disabled" href="#">Languages</button>
        </li>
        <li className="nav-item-build ">
            <button onClick={()=>setNavChoice('Proficiencies')} className="nav-link disabled" href="#">Proficiencies</button>
        </li>
        <li className="nav-item-build ">
            <button onClick={()=>setNavChoice('Feats')} className="nav-link disabled" href="#">Feats</button>
        </li>
        <li className="nav-item-build ">
            <button onClick={()=>setNavChoice('Inventory')} className="nav-link disabled" href="#">Inventory</button>
        </li>
    </ul>
    </div>
</nav>



);

};

export default CharBuildOptionBtns;