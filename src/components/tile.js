import React, { Component } from "react";
import Game from "../pages/game";

class Tile extends Component {
    state = {
        clicked: false
    }
    handleClick = event => {
        event.preventDefault();
        this.clicked ? Game.endGame() : this.setState({ clicked: true });

    }

    // render() {
    //     return (

    //     )
    // }

}



export default Tile;