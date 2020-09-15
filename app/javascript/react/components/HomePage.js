import React, { useState, useEffect } from "react"
import { Link, Redirect } from "react-router-dom"

import WoodTile from "./WoodTile.js"
import IronTile from "./IronTile.js"
import Unauthenticated from "./Unauthenticated.js"

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

  if (redirect) {
      return <Redirect to='/unauthenticated' />
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
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="columns cell small-6">
            <Link to="/searchAShot">
              <input className="leftbutton button"  id="searchAShot" value="Choose a Club" />
            </Link>
          </div>
          <div className="columns cell small-6">
            <Link to="/searchAShot">
              <input className="rightbutton button"  id="distanceTable" value="Distance Table" />
            </Link>
          </div>
        </div>
      </div>
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
