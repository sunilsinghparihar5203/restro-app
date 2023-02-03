import React from 'react';
import './Modal.css'
import { createPortal } from 'react-dom';
import Button from "./Button"

function Overlay(props) {
  return (
    <div className="Overlay" onClick={props.modalHandler} >
      {props.children}
    </div>
  )
}

function Modal(props) {
  return createPortal(
    <Overlay modalHandler={props.modalHandler}>
      <div className="overlay_model col-md-6 p-4">
        <div className='my-2'>This is modal</div>
        <Button type="button" modalHandler={props.modalHandler} btnClass="btn btn-danger" text="close" icon={false} />
      </div>
    </Overlay>,
    document.getElementById('portal')
  )
}
export default Modal;