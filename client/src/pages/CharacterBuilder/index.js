import React from 'react';
import Header from '../../components/Header';
import CharBuildFooter from '../../components/CharBuildFooter'
import NavBar from '../../components/NavBar'
import CharBuildOptionBtns from '../../components/CharBuildOptionBtns'
import '../CharacterBuilder/style.css';

const CharacterBuilder = () => {
    return (
        <main>
        <Header />
        <NavBar />
        <CharBuildOptionBtns />

<div class="gridwrap">
        <div class="build1">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis enim, nostrum nihil corrupti officia excepturi! Sunt ipsa molestiae accusamus iste laborum quis distinctio, deserunt rem commodi? In, incidunt saepe!
        </div>
        <div class="build2">
            
        </div>
        <div class="build3">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem repudiandae quia necessitatibus aspernatur perferendis itaque laborum sed labore praesentium amet dolorem, asperiores officia aperiam alias illo omnis saepe id voluptates!
        </div>
    </div>


    <div class="footer-wrap">
    <CharBuildFooter />
    </div>
    </main>
    );
};

export default CharacterBuilder;