import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import driver from '../../../assets/images/Driver.png'
import threewood from '../../../assets/images/3 Wood.png'
import fivewood from '../../../assets/images/5 Wood.png'
import hybrid from '../../../assets/images/Hybrid.png'

const ClubTile = (props) => {


  let image
  if (props.club.club_name === "Driver") {
    image =
    <img src={driver} alt="Driver" />
  } else if (props.club.club_name === "3 Wood") {
    image =
    <img src={threewood} alt="3 Wood" />
  } else if (props.club.club_name === "5 Wood") {
    image =
    <img src={fivewood} alt="5 Wood" />
  } else if (props.club.club_name === "Hybrid"){
    image =
    <img src={hybrid} alt="Hybrid" />
  }

  return (
    <div className="columns cell small-3">
      <a href={`./club/${props.club.id}`}>
        <div>
            {image}
        </div>
      </a>
    </div>
  )
}

export default ClubTile
