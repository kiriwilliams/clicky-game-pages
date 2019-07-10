import React from "react";

const showModal = "modal fade show d-block";
const hide = "d-none";


function Modal(props) {
    
    const modalName = props.name + "Modal";
    const modalLabel = props.name + "Label";
    
        return (
            <div className={props.modalOpen ? showModal : hide} id={modalName} tabIndex="-1" role="dialog" aria-labelledby={modalLabel} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id={modalLabel}>{props.title}</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => props.toggleModal(props.name)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="modal-body">
                            {props.children}
                        </div>

                        {/* Footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => props.toggleModal(props.name)}>Let's play!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Modal;