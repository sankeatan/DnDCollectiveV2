import React from "react";

export default function NavButtons({navSelection, navUpdate}){
    
    return (
    <ul className="navbar-nav">
            <li className="nav-item-build active">
                <button onClick={()=>navUpdate('Race')} className="nav-link">Race</button>
            </li>
            <li className="nav-item-build ">
                <button onClick={()=>navUpdate('Class')} className="nav-link">Class</button>
            </li>
            <li className="nav-item-build ">
                <button onClick={()=>navUpdate('AbilityScores')} className="nav-link disabled">Ability Scores</button>
            </li>
            <li className="nav-item-build ">
                <button onClick={()=>navUpdate('Background')} className="nav-link disabled">Background</button>
            </li>
            <li className="nav-item-build ">
                <button onClick={()=>navUpdate('Languages')} className="nav-link disabled">Languages</button>
            </li>
            <li className="nav-item-build ">
                <button onClick={()=>navUpdate('Proficiencies')} className="nav-link disabled">Proficiencies</button>
            </li>
            <li className="nav-item-build ">
                <button onClick={()=>navUpdate('Feats')} className="nav-link disabled">Feats</button>
            </li>
            <li className="nav-item-build ">
                <button onClick={()=>navUpdate('Inventory')} className="nav-link disabled">Inventory</button>
            </li>
        </ul>
    )
}

