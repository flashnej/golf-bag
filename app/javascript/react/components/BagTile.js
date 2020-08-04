import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const BagTile = (props) => {

  return (
    <div>
      <ul>
        <li><Link to={`/bag/${props.bag.id}`}>{props.bag.name}</Link></li>
      </ul>
    </div>
  )
}

export default BagTile
