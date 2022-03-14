import React, { useState } from 'react';

const CharBuildSheet = (props) => {

    const [gender, setGender] = useState("female");
    const [race, setRace] = useState("dragonborn");
    const [Class, setClass] = useState("fighter");
    const [background, setBackground] = useState("acolyte");
    const [str, setStr] = useState(0);
    const [dex, setDex] = useState(0);
    const [con, setCon] = useState(0);
    const [int, setInt] = useState(0);
    const [wis, setWis] = useState(0);
    const [cha, setCha] = useState(0);

    return (
    <div className="build1 content-row">
    <div className="card card-custom" style="width: 18rem;">
        <h5 className="card-title card-title-custom">
        <input type="text" id="name-input" placeholder="Character Name"></input></h5>
        <img className="card-img-top" src="/images/DragonbornMaleIcon.png" alt="character profile image" id='profile_img'></img>
        <div className="gender-wrapper1">
        <button id="male" value="Male">Male</button>
        </div>
        <div className="gender-wrapper2">
        <button id="female" value="Female">Female</button>
        </div>
        <div className="card-body">
        <h5 className="card-title" id="race_title"></h5> 
        <h5 className="card-title class_title"></h5>
        <hr>
        <div className="stats">
        <div className="health">
        <h8 id="hitpoints">HP: 0</h8>
        <p></p>
        </div>
        <div>
        <h8 className="background-title">Background:</h8>
        </div>
        <div>
        <p id="background"> Acolyte</p>
        </div>
        <div className="null">
        </div>
        <div className="strength">
            <h8>STR: </h8>
        </div>
        <div className="null">
        </div>
        <div className="null">
        </div>
        <div className="constitution">
            <h8>CON: </h8>
        </div>
        <div className="null">
        </div>
        <div className="null">
        </div>
        <div className="dexterity">
            <h8>DEX: </h8>
        </div>
        <div className="null">
        </div>
        <div className="null">
        </div>
        <div className="intelligence">
            <h8>INT: </h8>
        </div>
        <div className="null">
        </div>
        <div className="null">
        </div>
        <div className="wisdom">
            <h8>WIS: </h8>
        </div>
        <div className="null">
        </div>
        <div className="null">
        </div>
        <div className="charisma">
            <h8>CHA: </h8>
        </div>
        </div>
            <div className="card-body2">
                <button className="card-link" id="save_build">Save Build</button>
                <button className="card-link" id="character_sheet">Character Sheets</button>
            </div>
        </hr>
        </div>
    </div>
    </div>
) };

export default CharBuildSheet;