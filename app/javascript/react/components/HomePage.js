import React, { useState, useEffect } from "react"
import { Link, Redirect, Route } from "react-router-dom"

import WoodTile from "./WoodTile.js"
import IronTile from "./IronTile.js"

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


  let woodTiles
  let ironTiles
  if (clubs.length !== 0) {
    woodTiles = clubs.map((club) => {
      if (club["club_class"] == "wood") {
        return <WoodTile
                key={club["id"]}
                club={club}
              />
      }
    })
    ironTiles = clubs.map((club) => {
      if (club["club_class"] == "iron") {
        return <IronTile
                key={club["id"]}
                club={club}
              />
      }
    })
  }



  let clubTiles
  if (clubs.length !== 0) {
    clubTiles = clubs.map((club) => {
      if (club["club_class"] == "wood") {
        return <WoodTile
                key={club["id"]}
                club={club}
              />
      } else if (club["club_class"] == "iron") {
        return <IronTile
                key={club["id"]}
                club={club}
              />
      }
    })
  }

  const onClick = (props) => {
    setSellectedClub(props.target.alt)
  }

  return (
    <div className="homePage">
    <Link to="/searchAShot">
      <input className="button"  id="searchAShot" value="Look up a shot" />
    </Link>
    <div className="grid-container">
      <div className="grid-x grid-margin-x woods">
      {woodTiles}
      </div>
      <div className="grid-x grid-margin-x irons">
      {ironTiles}
      </div>
    </div>
    </div>
  )
}
export default HomePage
