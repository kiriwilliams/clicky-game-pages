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
                    
                    {/* Body */}
                    <div className="modal-body">
                    {props.children}
                    </div>
                    
                    {/* Footer */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => props.toggleModal()}>Let's play!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}