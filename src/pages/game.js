import React, { Component } from "react";
import Tile from "../components/tile";
import Img from "../components/img";
import Nav from "../components/nav";
import pokemon from "../pokemon.json";


class Game extends Component {
    state = {
        currentScore: 0,
        highScore: 0,
        pokemon: pokemon
    }

    endGame = () => {
        alert("game over");
        if(this.state.currentScore > this.state.highScore){
            this.setState({highScore: this.state.currentScore });
        }
        this.setState({ currentScore: 0 });

        let updatePokemon = this.state.pokemon;
        updatePokemon.forEach(pokemon => pokemon.clicked = false);
        this.setState({ pokemon: updatePokemon});
        this.shuffle();
    }

    shuffle = () => {
        //Fisher-Yates (aka Knuth) Shuffle.
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }
        this.setState({ pokemon: shuffle(this.state.pokemon) });
    }

    incrementScore = () => {
        this.setState({ currentScore: this.state.currentScore + 1 })
    }

    handleClick = event => {
        event.preventDefault();
        let pokeArray = this.state.pokemon;

        const id = event.target.getAttribute("id");
        let clickedPokemon = pokeArray.find(poke => {
            return poke.id === parseInt(id)
        });
        

        //end the game if image has already been clicked
        if(clickedPokemon.clicked){
            this.endGame();
        }
        //set clicked to true and shuffle
        else{
            clickedPokemon.clicked = true;
            // event.target.setState({ clicked: true });
            this.setState({pokemon: pokeArray})
            this.shuffle();
            this.incrementScore();
        }

    }



    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                    <Nav currentScore={this.state.currentScore} highScore={this.state.highScore}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div>
                            {this.state.pokemon.map(pokemon => {
                                return (
                                    <Img key={pokemon.id} id={pokemon.id} src={pokemon.src} handleClick={this.handleClick} endGame={this.endGame} shuffle={this.shuffle} incrementScore={this.incrementScore} reset={this.reset} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
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