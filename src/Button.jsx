import React from 'react'
import CartIcon from './CartIcon'

function Button(props) {
  return (
    <button className={props.btnClass} onClick={props.modalHandler}>
      {props.icon && <CartIcon />}
      {props.text}
    </button>
  )
}

export default Button;