import React, { useState, useEffect } from "react"
import { Link, Redirect, Route } from "react-router-dom"

import ClubTile from "./ClubTile.js"

const HomePage = (props) => {
  const [clubs, setClubs] = useState([])
  const [redirect, setRedirect] = useState(false)
  const [selectedClub, setSellectedClub] = useState('')

  useEffect(() => {
    fetchClubs()
  }, [])

  const fetchClubs = () => {
    fetch('/api/v1/clubs')
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        debugger
      }
      })
      .then((response) => response.json())
      .then((body) => {
        if (body.error) {
          setRedirect(true)
        } else {
          setClubs(body.clubs)
        }
      })
  }

  let clubTiles
  if (clubs.length !== 0) {
    clubTiles = clubs.map((club) => {
      return <ClubTile
              key={club["id"]}
              club={club}
            />
    })
  }

  const onClick = (props) => {
    setSellectedClub(props.target.alt)
  }

  return (
    <div className="homePage">
    <div className="grid-container">
      <h1> Your Clubs: </h1>
      <div className="grid-x grid-margin-x">
      {clubTiles}
      </div>
      <Link to="/searchAShot">
        <input className="button"  id="searchAShot" value="Look up a shot" />
      </Link>
    </div>
    </div>
  )
}
export default HomePage
// </div>
// <div className="woods">
// <img src={driver} alt="Driver" onClick={onClick}/>
// <img src={threewood} alt="3 Wood" onClick={onClick}/>
// <img src={fivewood} alt="5 Wood" onClick={onClick}/>
// <img src={hybrid} alt="Hybrid" onClick={onClick}/>
// {selectedClub}
// </div>
