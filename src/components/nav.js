import React from "react";

export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                Pokemon Memory Game
          </a>
            <span className="float-right text-light">
               <span className="m-2">Score: {props.currentScore}</span> 
                <span className="m-2">High Score: {props.highScore}</span>

            </span>

        </nav>
    );
}