import React, { useState, useEffect } from "react"

const BagTile = (props) => {

  return (
    <div>
      <ul>
        <li>{props.bag.name}</li>
      </ul>
    </div>
  )
}

export default BagTile
