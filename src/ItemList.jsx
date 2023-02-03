import React from 'react'

function ItemList(props) {
  return (
    <li className="list-group-item">{props.title} </li>
  )
}

export default ItemList;