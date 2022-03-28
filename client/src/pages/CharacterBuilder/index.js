import React, {createContext, useState} from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTER } from '../../utils/queries';
import Header from '../../components/Header';
import Footer from './components/footer'
import NavBar from '../../components/NavBar'
import CharBuildOptions from './components/buildOptions'
import CharBuildSheet from './components/buildSheet';
import CharBuildWikiInfo from './components/wikiInfo';
import '../CharacterBuilder/style.css';
//import { createContext } from 'vm';


const CharacterContext = createContext();

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

        <div class="gridwrap">
                <CharBuildSheet />
                <CharBuildOptions />
                <CharBuildWikiInfo />
        </div>
        <div class="footer-wrap">
                <Footer />
        </div>
</main>
</CharacterContext.Provider>
    );
};

export default CharacterBuilder;