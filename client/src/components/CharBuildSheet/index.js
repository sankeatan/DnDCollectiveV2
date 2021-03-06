import React, { useState } from 'react';

const CharBuildSheet = (props) => {

    const [gender, setGender] = useState("Female");
    const [charName, setCharName] = useState("Character Name");
    const [image, setImage] = useState("/images/DragonbornFemaleIcon.png")
    const style = {
        width:"18 rem"
    }

    return (
    <div className="build1 content-row">
    <div className="card card-custom" style={style}>
        <h5 className="card-title card-title-custom">
        <input onChange={(e) => setCharName({...charName, e})} type="text" id="name-input" placeholder={charName}></input></h5>
        <img className="card-img-top" src={image} alt="character profile" id='profile_img'></img>
        <div className="gender-wrapper1">
        <button onClick={() => setGender("Male"), setImage(`/images/${props.race}${gender}Icon.png`)} id="male">Male</button>
        </div>
        <div className="gender-wrapper2">
        <button onClick={() => setGender("Female"), setImage(`/images/${props.race}${gender}Icon.png`)} id="female">Female</button>
        </div>
        <div className="card-body">
        <h5 className="card-title" id="race_title">{props.race}</h5> 
        <h5 className="card-title class_title">{props.Class}</h5>
        <hr>
        <div className="stats">
        <div className="health">
        <h8 id="hitpoints">HP: {props.hp}</h8>
        <p></p>
        </div>
        <div>
        <h8 className="background-title">Background:</h8>
        </div>
        <div>
        <p id="background">{props.background}</p>
        </div>
        <div className="null">
        </div>
        <div className="strength">
            <h8>STR: {props.str}</h8>
        </div>
        <div className="null">
        </div>
        <div className="null">
        </div>
        <div className="constitution">
            <h8>CON: {props.con}</h8>
        </div>
        <div className="null">
        </div>
        <div className="null">
        </div>
        <div className="dexterity">
            <h8>DEX: {props.dex}</h8>
        </div>
        <div className="null">
        </div>
        <div className="null">
        </div>
        <div className="intelligence">
            <h8>INT: {props.int}</h8>
        </div>
        <div className="null">
        </div>
        <div className="null">
        </div>
        <div className="wisdom">
            <h8>WIS: {props.wis}</h8>
        </div>
        <div className="null">
        </div>
        <div className="null">
        </div>
        <div className="charisma">
            <h8>CHA: {props.cha}</h8>
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