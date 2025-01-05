import {useState} from "react";

import Header from "./blocks/Header";
import Greetings from "./blocks/Greetings";
import About from "./blocks/About";
import Portfolio from "./blocks/Portfolio";

import ReactGA from 'react-ga';


import "./assets/style/style.css"
import Offer from "./blocks/Offer";
import Price from "./blocks/Price";




function App(){

    const [animate, setAnimate] = useState(true)

    function handleBall(){
        setAnimate(animate => !animate)
    }

    //google analytics
    ReactGA.initialize('G-FQ5H2VEZE1');
    ReactGA.pageview(window.location.pathname + window.location.search);



    return (
        <div className={"container" + (animate ? " ball" : "")} id='Header'>
            <div className="css-blurry-gradient"></div>
            <Header
                handleBall={handleBall}
                ball={animate}
            />
            <Greetings/>
            <About/>
            <Price/>
            <Offer/>
            <Portfolio/>
        </div>
    );
}

export default App;
