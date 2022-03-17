import React, { useState, useContext } from "react";

const CharBuildOptionInfo = (props) => {

    const [race, setRace] = useState(props.race);
    const [Class, setClass] = useState("fighter");
    const [background, setBackground] = useState("acolyte");
    const [str, setStr] = useState(0);
    const [dex, setDex] = useState(0);
    const [con, setCon] = useState(0);
    const [int, setInt] = useState(0);
    const [wis, setWis] = useState(0);
    const [cha, setCha] = useState(0);
    const [navChoice, setNavChoice] = useState("Race");
    

    return (
    <div class="build2">
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
                <button onClick={()=>setNavChoice('Background')} className="nav-link disabled" href="#">Background</button>
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
    </div>
    )};

export default CharBuildOptionInfo;