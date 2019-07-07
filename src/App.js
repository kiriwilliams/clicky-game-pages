import React, { Component } from 'react';
import './App.css';
import Game from "./pages/game";
import Modal from "./components/modal";
import pokemon from "./pokemon.json";
// import { url } from 'inspector';

const bgPattern = {
  background: 'url("./images/blu_stripes.png") repeat'
};
const toggle = true;

class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    pokemon: pokemon,
    modalOpen: toggle
  }

  endGame = () => {
    alert("game over");
    if (this.state.currentScore > this.state.highScore) {
      this.setState({ highScore: this.state.currentScore });
    }
    this.setState({ currentScore: 0 });

    let updatePokemon = this.state.pokemon;
    updatePokemon.forEach(pokemon => pokemon.clicked = false);
    this.setState({ pokemon: updatePokemon });
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

  toggleModal = (e) => {
    const toggle = this.state.modalOpen ? false : true;
    this.setState({ modalOpen: toggle });
  }

  handleClick = event => {
    event.preventDefault();
    let pokeArray = this.state.pokemon;

    const id = event.target.getAttribute("id");
    let clickedPokemon = pokeArray.find(poke => {
      return poke.id === parseInt(id)
    });


    //end the game if image has already been clicked
    if (clickedPokemon.clicked) {
      this.endGame();
    }
    //set clicked to true and shuffle
    else {
      clickedPokemon.clicked = true;
      // event.target.setState({ clicked: true });
      this.setState({ pokemon: pokeArray })
      this.shuffle();
      this.incrementScore();
    }

  }
  render() {
    return (
      <div style={bgPattern} className="h-100">
        <Game currentScore={this.state.currentScore} highScore={this.state.highScore} toggleModal={this.toggleModal} pokemon={this.state.pokemon} handleClick={this.handleClick} endGame={this.endGame} shuffle={this.stuffle} incrementScore={this.incrementScore} reset={this.reset} />

        <Modal modalOpen={this.state.modalOpen} toggleModal={this.toggleModal}/>
        <div className={this.state.modalOpen ? "modal-backdrop" : "d-none"} onClick={() => this.toggleModal()}></div>
      </div>
    );
  }
}

export default App;
