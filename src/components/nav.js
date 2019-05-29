import React from "react";

export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                Clicky Game
          </a>
            <span className="float-right text-light">
                Score: {props.currentScore}
                High Score: {props.highScore}

            </span>

        </nav>
    );
}