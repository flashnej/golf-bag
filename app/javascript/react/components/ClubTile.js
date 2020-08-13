import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ClubTile = (props) => {

  return (
    <div className="columns cell small-3">
      <a href={`./club/${props.club.id}`}>
        <div className="clubTile">
            <p>{props.club.club_name}</p>
        </div>
      </a>
    </div>
  )
}

export default ClubTile
