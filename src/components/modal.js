import React from "react";

const showModal = "modal fade show d-block";
const hide = "d-none";
export default function Modal(props) {
    return (
        <div className={props.modalOpen ? showModal : hide} id="instructionsModal" tabIndex="-1" role="dialog" aria-labelledby="instructionsModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="instructionsModalLabel">About</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => props.toggleModal()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h5 className="modal-title">How to Play</h5>
                        <ul>
                            <li>The goal of the game is to click each pokemon <strong>one time</strong>. </li>
                            <li>Every time you click a pokemon they all get shuffled, so make sure to keep track of who you've already clicked!</li>
                            <li>Once you click the same pokemon twice it's game over.</li>
                        </ul>
                        <h5 className="modal-title">About the Game</h5>
                        <p>This game was created using React and Bootstrap. View the code or fork the repo on <a>github</a></p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => props.toggleModal()}>Let's play!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}