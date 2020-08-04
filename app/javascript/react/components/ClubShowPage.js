import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ClubShowPage = (props) => {
  const [club, setClub] = useState({})
  const [shots, setShots] = useState([])
  const id = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/clubs/${id}`)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          debugger
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setClub(body.club);
        setShots(body.shots)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  let shotsList
  if (shots.length !== 0) {
    shotsList = shots.map((shot) => {
      return(<li>{shot.distance} yards</li>)
    })
  }

  return (
    <div>
    <h1>{club.name}</h1>
      <ul>
        {shotsList}
      </ul>
      <Link to={`../${club.id}/addAShot`}>
        <input className="button"  id="addAShot" value="Add a shot" />
      </Link>
    </div>
  )
}

export default ClubShowPage
