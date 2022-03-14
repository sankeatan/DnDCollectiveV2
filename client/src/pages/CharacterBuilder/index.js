import React from 'react';
import Header from '../../components/Header';
import CharBuildFooter from '../../components/CharBuildFooter'
import NavBar from '../../components/NavBar'
import CharBuildOptionBtns from '../../components/CharBuildOptionBtns'
import CharBuildSheet from '../../components/CharBuildSheet';
import CharBuildWikiInfo from '../../components/CharBuildWikiInfo';
import CharBuildOptionInfo from '../../components/CharBuildWikiInfo';
import '../CharacterBuilder/style.css';

const CharacterBuilder = () => {
    return (
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
);
};

export default CharacterBuilder;