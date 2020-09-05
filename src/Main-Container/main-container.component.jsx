import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Screens
import TitleScreen from "../Screens/Title-Screen/title-screen.component";


const MainContainer = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={TitleScreen} />
            </Switch>
        </Router>
    )
}

export default MainContainer;