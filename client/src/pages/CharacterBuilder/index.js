import React, {createContext, useState} from 'react';
import { useQuery } from '@apollo/client';
//import { QUERY_CHARACTER } from '../../utils/queries';
import Header from '../../components/Header';
import CharBuildFooter from './components/CharBuildFooter'
import NavBar from '../../components/NavBar'
import CharBuildOptionBtns from '../../components/CharBuildOptionBtns'
import CharBuildSheet from '../../components/CharBuildSheet';
import CharBuildWikiInfo from '../../components/CharBuildWikiInfo';
import CharBuildOptionInfo from '../../components/CharBuildWikiInfo';

import '../CharacterBuilder/style.css';
//import { createContext } from 'vm';


const CharacterContext = createContext();

const QUERY_CHARACTER = '';

const CharacterBuilder = () => {

        const characterData = useQuery(QUERY_CHARACTER);
        
        const [character, setCharacter] = useState({characterData});
        if (!characterData)
               setCharacter({
                        race: "Dragonborn",
                        gender: "Female",
                        class: "Fighter",
                        background: "Acolyte",
                })
        else {
                setCharacter(characterData);
        }
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