import React, { useRef, useEffect } from "react";
import Styles from "./title-screen.module.scss";
import {useToggle} from "./newGameToggle";
import newGame from "./newGame";

// COMPONENTS
import NewGameForm from "../../Components/New-game-form/new-game-form.component";

//IMAGES
import Logo from "../../Assets/logo.svg";

//MUSIC
import Track1 from "../../Assets/music/bg/track1.mp3";
import ButtonPress from "../../Assets/music/buttons/buttonPress.mp3";



const TitleScreen = () => {

  const {NEW_GAME_STATE, toggle} = useToggle(false)
  let backgroundMusic = useRef(null);
  let buttonPress = useRef(null);


  const playButtonPress = () => {
    buttonPress.play();
  };

  useEffect(() => {
    backgroundMusic.play();

  },[]);



  return (
    <div className={`screen ${Styles.titleScreen}`}>
      <audio ref={(el) => (buttonPress = el)} className="buttonPress">
        <source src={ButtonPress}></source>
      </audio>
      <audio ref={(el) => (backgroundMusic = el)} className="buttonPress">
        <source src={Track1}></source>
      </audio>
      {/* <embed src={Track1} loop={true} autostart="true" width="2" height="0" /> */}

      {NEW_GAME_STATE ? <NewGameForm toggle={toggle}  />: null}
      

      <img src={Logo} alt="" className={Styles.logo} />
      <div className={Styles.menuContainer}>
        <button onClick={toggle} onMouseDown={playButtonPress} className={`${Styles.MenuOption}`}>New Game</button>
        <button onMouseDown={playButtonPress} className={`${Styles.MenuOption}`}>Load Game</button>
        <button onMouseDown={playButtonPress} className={`${Styles.MenuOption}`}>Options</button>

      </div>
      <span className={Styles.copyright}>&#169; Andrew Pinon 2020</span>
    </div>
  );
};

export default TitleScreen;
