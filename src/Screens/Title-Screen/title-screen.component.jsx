import React, { useRef } from "react";
import Styles from "./title-screen.module.scss";

//IMAGES
import Logo from "../../Assets/logo.svg";

//MUSIC
import Track1 from "../../Assets/music/bg/track1.mp3";
import ButtonPress from "../../Assets/music/buttons/buttonPress.mp3"

//FUNCTIONS
// const playButtonPress = () =>{
//     const buttonPress = useRef(null)
//     buttonPress.play()
// }

const TitleScreen = () => {
    let buttonPress = useRef(null)
    const playButtonPress = () =>{
        buttonPress.play()
    }

  return (
    <div className={`screen ${Styles.titleScreen}`}>
      <audio ref={el => buttonPress = el} className="buttonPress">
        <source src={ButtonPress}></source>
      </audio>
      <embed src={Track1} loop={true} autostart="true" width="2" height="0" />
      <img src={Logo} alt="" className={Styles.logo} />
      <div className={Styles.menuContainer}>
        <div onMouseDown={playButtonPress} className={`${Styles.MenuOption}`}>New Game</div>
        <div onMouseDown={playButtonPress} className={`${Styles.MenuOption}`}>Load</div>
        <div onMouseDown={playButtonPress} className={`${Styles.MenuOption}`}>Options</div>
      </div>
      <span className={Styles.copyright}>&#169; Andrew Pinon 2020</span>
    </div>
  );
};

export default TitleScreen;
