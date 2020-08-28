import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import driver from '../../../assets/images/Driver.png'
import threewood from '../../../assets/images/3 Wood.png'
import fivewood from '../../../assets/images/5 Wood.png'
import hybrid from '../../../assets/images/Hybrid.png'
import threeiron from '../../../assets/images/3 Iron.png'
import fouriron from '../../../assets/images/4 Iron.png'
import fiveiron from '../../../assets/images/5 Iron.png'
import sixiron from '../../../assets/images/6 Iron.png'
import seveniron from '../../../assets/images/7 Iron.png'
import eightiron from '../../../assets/images/8 Iron.png'
import nineiron from '../../../assets/images/9 Iron.png'
import pitchwedge from '../../../assets/images/Pitch.png'
import sandwedge from '../../../assets/images/Sand.png'

const IronTile = (props) => {


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
  } else if (props.club.club_name === "3 Iron") {
    image =
      <img src={threeiron} alt="3 Iron" />
  } else if (props.club.club_name === "4 Iron") {
    image =
      <img src={fouriron} alt="4 Iron" />
  } else if (props.club.club_name === "5 Iron") {
    image =
      <img src={fiveiron} alt="5 Iron" />
  } else if (props.club.club_name === "6 Iron") {
    image =
      <img src={sixiron} alt="6 Iron" />
  } else if (props.club.club_name === "7 Iron") {
    image =
      <img src={seveniron} alt="7 Iron" />
  } else if (props.club.club_name === "8 Iron") {
    image =
      <img src={eightiron} alt="8 Iron" />
  } else if (props.club.club_name === "9 Iron") {
    image =
      <img src={nineiron} alt="9 Iron" />
  } else if (props.club.club_name === "Pitch Wedge") {
    image =
      <img src={pitchwedge} alt="Pitching Wedge" />
  } else if (props.club.club_name === "Sand Wedge") {
    image =
      <img src={sandwedge} alt="Sand Wedge" />
  }

  return (
    <div className="columns cell auto ironTile">
      <a href={`./club/${props.club.id}`}>
        <div>
            {image}
        </div>
      </a>
    </div>
  )
}

export default IronTile
