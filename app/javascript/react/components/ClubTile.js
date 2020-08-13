import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ClubTile = (props) => {

  return (
    <div>
      <ul>
        <li><Link to={`/club/${props.club.id}`}>{props.club.club_name}</Link></li>
      </ul>
    </div>
  )
}

export default ClubTile
