import React, { Component } from "react";



class Image extends Component {
    state = {
        clicked: false,
        src: this.props.src
    }
    
    

    handleClick = event => {
        console.log("click");
        event.preventDefault();

        //end the game if image has already been clicked
        if(this.state.clicked){
            this.props.endGame();
        }
        //set clicked to true and shuffle
        else{
            this.setState({ clicked: true });
            this.props.shuffle();
            this.props.incrementScore();
        }

    }

    render() {
        return (
            <img src={this.props.src} id={this.props.id} alt={this.props.src} onClick={this.props.handleClick}></img> 
        )
    }


}

export default Image;
// export default function Img(props) {
//     handleClick = (event) => {

//         this.setState({play: false});
//         this.clicked ? Game.endGame() : event.target.setState({ clicked: true });

//     }

//     return (
//         <img src={props.src} alt={props.src} onClick={handleClick()}></img> 
//     )
// }