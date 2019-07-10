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
    level: 1,
    pokemon: pokemon,
    modalOpen: toggle
  }

  componentDidMount = () => {
    let activePokemon = this.shuffle(pokemon);
    this.setState({ pokemon: activePokemon.slice(0,4)})
  }

  //Ends the game
  //sets high score
  //resets game to play again
  endGame = () => {
    alert("game over");
    if (this.state.currentScore > this.state.highScore) {
      this.setState({ highScore: this.state.currentScore });
    }
    this.setState({ currentScore: 0, level: 1 });

    let updatePokemon = this.clearClicks(pokemon);

    this.setState({ pokemon: this.shuffle(updatePokemon).slice(0,4) });
  }

  clearClicks = (array) => { 
    array.forEach(pokemon => pokemon.clicked = false);
    return array;
  }

  //Fisher-Yates (aka Knuth) Shuffle.
  shuffle = (array) => {
    
    
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

  //increases the score in the state and update level if necessary
  incrementScore = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
    //checks score at different points and sets level
    switch (this.state.currentScore){
      case 3:
        this.nextLevel(2, 9);
        break;
      case 8:
        this.nextLevel(3, 12);
        break;
      case 12:
        this.nextLevel(4, 24);
        break;
      case 24:
        this.bigWin();
    }
  }

  //sets the level and determines how many images are in play
  nextLevel(lvl, quantity){
    this.setState({ level: lvl, score: 0, pokemon: this.clearClicks(this.shuffle(pokemon).slice(0,quantity)) });
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
      this.setState({ pokemon: this.shuffle(pokeArray) })
      this.incrementScore();
    }

  }
  render() {
    return (
      <div style={bgPattern} className="h-100">
        <Game currentLevel={this.state.level} highScore={this.state.highScore} toggleModal={this.toggleModal} pokemon={this.state.pokemon} handleClick={this.handleClick} endGame={this.endGame} shuffle={this.stuffle} incrementScore={this.incrementScore} reset={this.reset} />

        <Modal modalOpen={this.state.modalOpen} toggleModal={this.toggleModal}/>
        <div className={this.state.modalOpen ? "modal-backdrop" : "d-none"} onClick={() => this.toggleModal()}></div>
      </div>
    );
  }
}

export default App;
