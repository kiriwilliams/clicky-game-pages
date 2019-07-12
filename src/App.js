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
    currentScore: 45,
    currentPoints: 0,
    highScore: localStorage.getItem("highScore") || 0,
    level: 4,
    pokemon: pokemon,
    aboutOpen: toggle,
    levelOpen: false,
    winOpen: false


  }

  componentDidMount = () => {
    let activePokemon = this.shuffle(pokemon);
    this.setState({ pokemon: activePokemon.slice(0, 4),     modalOpen: this.state.aboutOpen || this.state.levelOpen })
  }

  //Ends the game
  //sets high score
  //resets game to play again
  endGame = (e) => {
    alert("game over");
    
    if (this.state.currentPoints > this.state.highScore) {
      this.setState({ highScore: this.state.currentPoints });
    }
    localStorage.setItem("highScore",this.state.highScore);

    this.setState({ currentScore: 0, currentPoints: 0, level: 1 });

    let updatePokemon = this.clearClicks(pokemon);

    this.setState({ pokemon: this.shuffle(updatePokemon).slice(0, 4) });
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
    this.setState({ currentScore: this.state.currentScore + 1, currentPoints: this.state.currentPoints + 1 });
    //checks score at different points and sets level
    switch (this.state.currentScore) {
      case 3:
        this.nextLevel(2, 9);
        break;
      case 12:
        this.nextLevel(3, 12);
        break;
      case 24:
        this.nextLevel(4, 24);
        break;
      case 47:
        this.toggleModal("win");
        break;
      default: 
        return;
    }
  }

  //sets the level and determines how many images are in play
  nextLevel(lvl, quantity) {

    //show modal to inform user of level up
    this.toggleModal("level");

    //update the level and quantity of pokemon in play
    this.setState({ level: lvl, pokemon: this.clearClicks(this.shuffle(pokemon).slice(0, quantity)) });
  }

  //toggles modals. takes one string to identify which modal to toggle.
  toggleModal = (modal) => {
    let toggle;
    switch(modal){
      case "about":
          toggle = this.state.aboutOpen ? false : true;
          this.setState({ aboutOpen: toggle });
        break;
      case "level":
          toggle = this.state.levelOpen ? false : true;
          this.setState({ levelOpen: toggle });
        break;
      case "win":
        toggle = this.state.winOpen ? false : true;
        this.setState({ winOpen: toggle });
        break;
      default:
        return;
    }

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
        <Game currentLevel={this.state.level} currentPoints={this.state.currentPoints} highScore={this.state.highScore} toggleModal={this.toggleModal} pokemon={this.state.pokemon} handleClick={this.handleClick} endGame={this.endGame} shuffle={this.stuffle} incrementScore={this.incrementScore} reset={this.reset} />


        {/* About Modal - instructions/link to github */}
        <Modal name={"about"} title={"About"} modalOpen={this.state.aboutOpen} toggleModal={this.toggleModal} button={this.toggleModal}>

            <h5 className="modal-title">How to Play</h5>
            <ul>
              <li>The goal of the game is to click each pokemon <strong>one time</strong>. </li>
              <li>Every time you click a pokemon they all get shuffled, so make sure to keep track of who you've already clicked!</li>
              <li>Once you click the same pokemon twice it's game over.</li>
            </ul>
            <h5 className="modal-title">About the Game</h5>
            <p>This game was created using React and Bootstrap. View the code or fork the repo on <a href="https://github.com/kiriwilliams/pokemon-memory-game/tree/master">github.com/kiriwilliams</a></p>
        </Modal>

        {/* Level Modal */}
        <Modal name={"level"} title={"Level Up!"} modalOpen={this.state.levelOpen} toggleModal={this.toggleModal} button={this.toggleModal}>
          Ready for level {this.state.level}?
        </Modal>


        {/* Win Modal */}
        <Modal name={"win"} title={"You Win!"} modalOpen={this.state.winOpen} toggleModal={this.toggleModal} button={this.endGame}>
         Congratulations! You won the entire game!!
        </Modal>

        {/* Modal Backdrop */}
        <div className={this.state.aboutOpen || this.state.levelOpen ?  "modal-backdrop" : "d-none"} onClick={() => this.toggleModal(this.state.aboutOpen ? "about" : "level")}></div>
      </div>
    );
  }
}

export default App;
