import React from "react";

export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger d-flex">
            <a className="navbar-brand" href="/">
                Pokemon Memory Game
          </a>
            <span className="text-light">
               <span className="m-2">Level: {props.currentLevel}</span> 
                <span className="m-2">High Score: {props.highScore}</span>

            </span>
            <span className="ml-auto mr-2">
            <button className="btn btn-outline-light mr-2" onClick={() => props.toggleModal()}>About</button>
            </span>
            

        </nav>
    );
}