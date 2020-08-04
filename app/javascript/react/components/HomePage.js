import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import ClubTile from "./ClubTile.js"

const HomePage = (props) => {
  const [clubs, setClubs] = useState([])

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
        setClubs(body.clubs)
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

  return (
    <div>
      <h1> Your Clubs: </h1>
      {clubTiles}
      <Link to="/addAClub">
        <input className="button"  id="addAClub" value="Add a club" />
      </Link>
    </div>
  )
}

export default HomePage
