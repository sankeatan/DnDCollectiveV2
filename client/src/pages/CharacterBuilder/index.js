import React, {createContext, useContext, useState} from 'react';
import Header from '../../components/Header';
import CharBuildFooter from '../../components/CharBuildFooter'
import NavBar from '../../components/NavBar'
import CharBuildOptionBtns from '../../components/CharBuildOptionBtns'
import CharBuildSheet from '../../components/CharBuildSheet';
import CharBuildWikiInfo from '../../components/CharBuildWikiInfo';
import CharBuildOptionInfo from '../../components/CharBuildWikiInfo';
import '../CharacterBuilder/style.css';
//import { createContext } from 'vm';

const CharacterBuilder = (props) => {
        const [character, setCharacter] = useState({});
        if (!props.character)
               setCharacter({
                        race: "Dragonborn",
                        gender: "Female",
                        class: "Fighter",
                        bakcground: "Acolyte",
                })
        else {
                setCharacter(props.character);
        }
        const CharacterContext = createContext(character)
    return (
<CharacterContext.Provider value={character}>
<main>
        <Header />
        <NavBar />
        <CharBuildOptionBtns />

        <div class="gridwrap">
                <CharBuildSheet />
                <CharBuildOptionInfo />
                <CharBuildWikiInfo />
        </div>
        <div class="footer-wrap">
                <CharBuildFooter />
        </div>
</main>
</CharacterContext.Provider>
    );
};

export default CharacterBuilder;