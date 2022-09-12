import React from 'react'

function Modal({ id, modalTitle, modalBody }) {

    return (
        <div className="modal fade" id={id} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header border-lightdark">
                        {modalTitle}
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {modalBody}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal