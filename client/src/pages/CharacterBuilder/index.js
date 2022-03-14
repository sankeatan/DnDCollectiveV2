import React from 'react';
import Header from '../../components/Header';
import CharBuildFooter from '../../components/CharBuildFooter'
import NavBar from '../../components/NavBar'
import { Link } from 'react-router-dom';
import '../CharacterBuilder/style.css';

const CharacterBuilder = () => {
    return (
        <main>
        <Header />
        <NavBar />
        <nav class="navbar navbar-expand-lg-build navbar-light buildnav">
    <div class="collapse navbar-collapse-build" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item-build active">
        <Link class="nav-link" href="#">Race</Link>
        </li>
        <li class="nav-item-build ">
        <Link class="nav-link" href="#">Class</Link>
        </li>
        <li class="nav-item-build ">
        <Link class="nav-link disabled" href="#">Ability Scores</Link>
        </li>
        <li class="nav-item-build ">
        <Link class="nav-link disabled" href="#">Languages</Link>
        </li>
        <li class="nav-item-build ">
            <Link class="nav-link disabled" href="#">Proficiencies</Link>
        </li>
        <li class="nav-item-build ">
            <Link class="nav-link disabled" href="#">Feats</Link>
        </li>
        <li class="nav-item-build ">
            <Link class="nav-link disabled" href="#">Inventory</Link>
        </li>
    </ul>
    </div>
</nav>
<div class="navwrap">

    </div>

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