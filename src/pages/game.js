import React from "react";
import Img from "../components/img";
import Nav from "../components/nav";



function Game(props) {

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <Nav currentLevel={props.currentLevel} highScore={props.highScore} toggleModal={props.toggleModal} />
                </div>
            </div>
            <div className="row container mx-auto mt-5">
                <div className="col-12 text-center bg-white p-3">
                    {props.pokemon.map(pokemon => {
                        return (
                            <Img key={pokemon.id} id={pokemon.id} src={pokemon.src} handleClick={props.handleClick} endGame={props.endGame} shuffle={props.shuffle} incrementScore={props.incrementScore} reset={props.reset} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Game;

// "../images/Bulbasaur.png",
//             "../images/Charmander.png",
//             "../images/Chespin.png",
//             "../images/Chikorita.png",
//             "../images/Chimchar.png",
//             "../images/Cyndaquil.png",
//             "../images/Fennekin.png",
//             "../images/Froakie.png",
//             "../images/Grookey.png",
//             "../images/Litten.png",
//             "../images/Mudkip.png",
//             "../images/Oshawott.png",
//             "../images/Piplup.png",
//             "../images/Popplio.png",
//             "../images/Rowlet.png",
//             "../images/Scorbunny.png",
//             "../images/Snivy.png",
//             "../images/Sobble.png",
//             "../images/Squirtle.png",
//             "../images/Tepig.png",
//             "../images/Torchic.png",
//             "../images/Totodile.png",
//             "../images/Treecko.png",
//             "../images/Turtwig.png",