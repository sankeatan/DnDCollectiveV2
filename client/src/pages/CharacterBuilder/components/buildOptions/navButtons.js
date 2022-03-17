import React, { UseState } from "react";

const CharBuildOptionInfo = (props) => {

    const [race, setRace] = UseState('');
    const [Class, setClass] = UseState("fighter");
    const [background, setBackground] = UseState("acolyte");
    const [str, setStr] = UseState(0);
    const [dex, setDex] = UseState(0);
    const [con, setCon] = UseState(0);
    const [int, setInt] = UseState(0);
    const [wis, setWis] = UseState(0);
    const [cha, setCha] = UseState(0);
    const [navChoice, setNavChoice] = UseState("Race");
    

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