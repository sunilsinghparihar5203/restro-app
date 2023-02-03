import React from 'react'
import Button from "./Button"
function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand">Navbar</a>
        <div className="d-flex">
          <Button type="button" modalHandler={props.modalHandler} btnClass="btn btn-warning" text="Cart" icon={true} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;