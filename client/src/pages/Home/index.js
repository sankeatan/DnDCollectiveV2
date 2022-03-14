import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import '../Home/style.css';
import video from '../../assets/videos/ship.mp4'


const Home = () => {

  return (
    <main>
      <Header />
      <div className="videoContainer">
        <div className="videoWrapper">
          <video autoPlay muted loop id="Video">
          <source className="video" src={video} type="video/mp4"></source>
          </video>
        </div>
      </div>
    <div className= "gradientDiv">
        <div className="div1">
            <div className="content1">
                <h1 className="content1-title">Character Builder</h1>
                <p className="content1-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae reprehenderit provident magni labore perspiciatis voluptas tempore quia ullam magnam! Error harum qui quae culpa dolores deleniti earum, delectus aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae reprehenderit provident magni labore perspiciatis voluptas tempore quia ullam magnam! Error harum qui quae culpa dolores deleniti earum, delectus aperiam. </p>
                <h4 className="learn1">Learn More</h4>
            </div>
        </div>
        <div className="div2">
            <div className="content2">
                <h1 className="content2-title">Community Builds</h1>
                <p className="content2-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae reprehenderit provident magni labore perspiciatis voluptas tempore quia ullam magnam! Error harum qui quae culpa dolores deleniti earum, delectus aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae reprehenderit provident magni labore perspiciatis voluptas tempore quia ullam magnam! Error harum qui quae culpa dolores deleniti earum, delectus aperiam. </p>
                <h4 className="learn2">Learn More</h4>
            </div>
        </div>
        <div className="div3">
            <div className="content3">
                <h1 className="content3-title">Game Info</h1>
                <p className="content3-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae reprehenderit provident magni labore perspiciatis voluptas tempore quia ullam magnam! Error harum qui quae culpa dolores deleniti earum, delectus aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae reprehenderit provident magni labore perspiciatis voluptas tempore quia ullam magnam! Error harum qui quae culpa dolores deleniti earum, delectus aperiam. </p>
                <h4 className="learn3">Learn More</h4>
            </div>
        </div>
    </div>

    <div className="slider-wrap">
        <h1 className="book-title">Core Books</h1>
    <div className="slider">
        <div className="slide-track">
            <div className="slide"><Link href="https://www.amazon.com/Players-Handbook-Dungeons-Dragons-Wizards/dp/0786965606/ref=asc_df_0786965606/?tag=hyprod-20&linkCode=df0&hvadid=312089030079&hvpos=&hvnetw=g&hvrand=2646904733918988293&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9011841&hvtargid=pla-332338852014&psc=1"><img src="../client/src/assets/images/logo192.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Dungeons-Dragons-Dungeon-Rulebook-Roleplaying/dp/0786965622/ref=sr_1_1?crid=KIUYX4W2JB2W&keywords=dungeon+masters+guide&qid=1646958432&s=books&sprefix=dungeon+ma%2Cstripbooks%2C99&sr=1-1"><img src="../client/src/assets/images/dungeon-masters-guide.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Cauldron-Everything-Expansion-Dungeons-Dragons/dp/0786967021/ref=sr_1_1?crid=28ZZYR1XHTMI9&keywords=tashas+cauldron+of+everything&qid=1646958618&s=books&sprefix=tasha%2Cstripbooks%2C113&sr=1-1"><img src="../client/src/assets/images/tashas-cauldron-of-everything.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/MORDENKAINENS-FOES-Accessory-Wizards-Team/dp/0786966246/ref=sr_1_1?crid=3825AWQYTEHL6&keywords=mordenkainen%27s+tome+of+foes&qid=1646958670&s=books&sprefix=morde%2Cstripbooks%2C94&sr=1-1"><img src="../client/src/assets/images/mordenkainens-tome-of-foes.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Xanathars-Guide-Everything-Wizards-Team/dp/0786966114/ref=sr_1_1?crid=13O6HB48ZM4AL&keywords=xanathar%27s+guide+to+everything&qid=1646958704&s=books&sprefix=xan%2Cstripbooks%2C83&sr=1-1"><img src="../client/src/assets/images/xanathars-guide-to-everything.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Fizbans-Treasury-Dragons-Dungeon-Dungeons/dp/0786967293/ref=sr_1_1?crid=2RLL9AAVSG2&keywords=fitzbans+treasury+of+dragons&qid=1646958771&s=books&sprefix=fitz%2Cstripbooks%2C86&sr=1-1"><img src="../client/src/assets/images/fizbans-treasury-of-dragons.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Dungeons-Dragons-Monster-Rulebook-Roleplaying/dp/0786965614/ref=sr_1_1?crid=32WQCM2RDHW77&keywords=monster+manual&qid=1646958816&s=books&sprefix=monster%2Cstripbooks%2C99&sr=1-1"><img src="../client/src/assets/images/monster-manual.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Players-Handbook-Dungeons-Dragons-Wizards/dp/0786965606/ref=asc_df_0786965606/?tag=hyprod-20&linkCode=df0&hvadid=312089030079&hvpos=&hvnetw=g&hvrand=2646904733918988293&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9011841&hvtargid=pla-332338852014&psc=1" alt=""><img src="../client/src/assets/images/logo192.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Dungeons-Dragons-Dungeon-Rulebook-Roleplaying/dp/0786965622/ref=sr_1_1?crid=KIUYX4W2JB2W&keywords=dungeon+masters+guide&qid=1646958432&s=books&sprefix=dungeon+ma%2Cstripbooks%2C99&sr=1-1"><img src="../client/src/assets/images/dungeon-masters-guide.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Cauldron-Everything-Expansion-Dungeons-Dragons/dp/0786967021/ref=sr_1_1?crid=28ZZYR1XHTMI9&keywords=tashas+cauldron+of+everything&qid=1646958618&s=books&sprefix=tasha%2Cstripbooks%2C113&sr=1-1"><img src="../client/src/assets/images/tashas-cauldron-of-everything.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/MORDENKAINENS-FOES-Accessory-Wizards-Team/dp/0786966246/ref=sr_1_1?crid=3825AWQYTEHL6&keywords=mordenkainen%27s+tome+of+foes&qid=1646958670&s=books&sprefix=morde%2Cstripbooks%2C94&sr=1-1"><img src="../client/src/assets/images/mordenkainens-tome-of-foes.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Xanathars-Guide-Everything-Wizards-Team/dp/0786966114/ref=sr_1_1?crid=13O6HB48ZM4AL&keywords=xanathar%27s+guide+to+everything&qid=1646958704&s=books&sprefix=xan%2Cstripbooks%2C83&sr=1-1"><img src="../client/src/assets/images/xanathars-guide-to-everything.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Fizbans-Treasury-Dragons-Dungeon-Dungeons/dp/0786967293/ref=sr_1_1?crid=2RLL9AAVSG2&keywords=fitzbans+treasury+of+dragons&qid=1646958771&s=books&sprefix=fitz%2Cstripbooks%2C86&sr=1-1"><img src="../client/src/assets/images/fizbans-treasury-of-dragons.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Dungeons-Dragons-Monster-Rulebook-Roleplaying/dp/0786965614/ref=sr_1_1?crid=32WQCM2RDHW77&keywords=monster+manual&qid=1646958816&s=books&sprefix=monster%2Cstripbooks%2C99&sr=1-1"><img src="../client/src/assets/images/monster-manual.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Players-Handbook-Dungeons-Dragons-Wizards/dp/0786965606/ref=asc_df_0786965606/?tag=hyprod-20&linkCode=df0&hvadid=312089030079&hvpos=&hvnetw=g&hvrand=2646904733918988293&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9011841&hvtargid=pla-332338852014&psc=1"><img src="../client/src/assets/images/logo192.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Dungeons-Dragons-Dungeon-Rulebook-Roleplaying/dp/0786965622/ref=sr_1_1?crid=KIUYX4W2JB2W&keywords=dungeon+masters+guide&qid=1646958432&s=books&sprefix=dungeon+ma%2Cstripbooks%2C99&sr=1-1"><img src="../client/src/assets/images/dungeon-masters-guide.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Cauldron-Everything-Expansion-Dungeons-Dragons/dp/0786967021/ref=sr_1_1?crid=28ZZYR1XHTMI9&keywords=tashas+cauldron+of+everything&qid=1646958618&s=books&sprefix=tasha%2Cstripbooks%2C113&sr=1-1"><img src="../client/src/assets/images/tashas-cauldron-of-everything.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/MORDENKAINENS-FOES-Accessory-Wizards-Team/dp/0786966246/ref=sr_1_1?crid=3825AWQYTEHL6&keywords=mordenkainen%27s+tome+of+foes&qid=1646958670&s=books&sprefix=morde%2Cstripbooks%2C94&sr=1-1"><img src="../client/src/assets/images/mordenkainens-tome-of-foes.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Xanathars-Guide-Everything-Wizards-Team/dp/0786966114/ref=sr_1_1?crid=13O6HB48ZM4AL&keywords=xanathar%27s+guide+to+everything&qid=1646958704&s=books&sprefix=xan%2Cstripbooks%2C83&sr=1-1"><img src="../client/src/assets/images/xanathars-guide-to-everything.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Fizbans-Treasury-Dragons-Dungeon-Dungeons/dp/0786967293/ref=sr_1_1?crid=2RLL9AAVSG2&keywords=fitzbans+treasury+of+dragons&qid=1646958771&s=books&sprefix=fitz%2Cstripbooks%2C86&sr=1-1"><img src="../client/src/assets/images/fizbans-treasury-of-dragons.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Dungeons-Dragons-Monster-Rulebook-Roleplaying/dp/0786965614/ref=sr_1_1?crid=32WQCM2RDHW77&keywords=monster+manual&qid=1646958816&s=books&sprefix=monster%2Cstripbooks%2C99&sr=1-1"><img src="../client/src/assets/images/monster-manual.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Players-Handbook-Dungeons-Dragons-Wizards/dp/0786965606/ref=asc_df_0786965606/?tag=hyprod-20&linkCode=df0&hvadid=312089030079&hvpos=&hvnetw=g&hvrand=2646904733918988293&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9011841&hvtargid=pla-332338852014&psc=1"><img src="../client/src/assets/images/logo192.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Dungeons-Dragons-Dungeon-Rulebook-Roleplaying/dp/0786965622/ref=sr_1_1?crid=KIUYX4W2JB2W&keywords=dungeon+masters+guide&qid=1646958432&s=books&sprefix=dungeon+ma%2Cstripbooks%2C99&sr=1-1"><img src="../client/src/assets/images/dungeon-masters-guide.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Cauldron-Everything-Expansion-Dungeons-Dragons/dp/0786967021/ref=sr_1_1?crid=28ZZYR1XHTMI9&keywords=tashas+cauldron+of+everything&qid=1646958618&s=books&sprefix=tasha%2Cstripbooks%2C113&sr=1-1"><img src="../client/src/assets/images/tashas-cauldron-of-everything.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/MORDENKAINENS-FOES-Accessory-Wizards-Team/dp/0786966246/ref=sr_1_1?crid=3825AWQYTEHL6&keywords=mordenkainen%27s+tome+of+foes&qid=1646958670&s=books&sprefix=morde%2Cstripbooks%2C94&sr=1-1"><img src="../client/src/assets/images/mordenkainens-tome-of-foes.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Xanathars-Guide-Everything-Wizards-Team/dp/0786966114/ref=sr_1_1?crid=13O6HB48ZM4AL&keywords=xanathar%27s+guide+to+everything&qid=1646958704&s=books&sprefix=xan%2Cstripbooks%2C83&sr=1-1"><img src="../client/src/assets/images/xanathars-guide-to-everything.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Fizbans-Treasury-Dragons-Dungeon-Dungeons/dp/0786967293/ref=sr_1_1?crid=2RLL9AAVSG2&keywords=fitzbans+treasury+of+dragons&qid=1646958771&s=books&sprefix=fitz%2Cstripbooks%2C86&sr=1-1"><img src="../client/src/assets/images/fizbans-treasury-of-dragons.png" alt=""></img></Link></div>
            <div className="slide"><Link href="https://www.amazon.com/Dungeons-Dragons-Monster-Rulebook-Roleplaying/dp/0786965614/ref=sr_1_1?crid=32WQCM2RDHW77&keywords=monster+manual&qid=1646958816&s=books&sprefix=monster%2Cstripbooks%2C99&sr=1-1"><img src="../client/src/assets/images/monster-manual.png" alt=""></img></Link></div>
        </div>
    </div>
    <p className="book-p"> Shop for some of these amazing Core Rule books to start your adventure today!</p>
    </div>

    <div className= "reviews">
        <div className="reviews1">
            <div className="content1">
                <img className= "pic1" src="../client/src/assets/images/cameronbiopic.jpg" alt=""></img>
                <h1 className="review1-title">Hank Hankins</h1>
                <p className="content1-p">This site is bad ass!</p>
                <div className="stars">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div className="reviews2">
            <div className="content2">
                <img className= "pic2" src="../client/src/assets/images/cameronbiopic.jpg" alt=""></img>
                <h1 className="review2-title">Cameron Clark</h1>
                <p className="content2-p">This site makes me cum!</p>
                <div className="stars">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div className="reviews3">
            <div className="content3">
                <img className= "pic3" src="../client/src/assets/images/cameronbiopic.jpg" alt=""></img>
                <h1 className="review3-title">William Gartman</h1>
                <p className="content3-p">This site makes me want to shoot more racoons.</p>
                <div className="stars">
                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
      <Footer />
    </main>
  );
};

export default Home;
