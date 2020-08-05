import React, { useState } from "react"
import { Link } from "react-router-dom"

const ClubShowPage = (props) => {
  const [club, setClub] = useState({})
  const [shots, setShots] = useState([])
  const [surface, setSurface] = useState(null)
  const id = props.match.params.id

  const handleChange = (event) => {
    setSurface(capitalizeFirstLetter(event.target.value))
    fetch(`/api/v1/clubs/${id}/shots/${event.target.value}`)
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        debugger
      }
    })
    .then((response) => response.json())
    .then((body) => {
      setShots(body)
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }

  function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  let shotList
  let fairwayShotList
  if (shots.length !== 0) {
    shotList = shots.map((shot) => {
      return(<li>{shot.distance} yards / {shot.shot_quality} / {shot.surface}</li>)
    })
  }

  return (
    <div>
    <h1>{club.name}</h1>
    <form>
      <label> Surface:
        <select onChange={handleChange} id="surface">
          <option value=""></option>
          <option value="tee shot">Tee Shot</option>
          <option value="fairway">Fairway</option>
          <option value="rough">Rough</option>
          <option value="sand">Sand</option>
        </select>
      </label>
    </form>
    <h4>{surface} Shots </h4>
      <ul>
        {shotList}
      </ul>
      <Link to={`../${id}/addAShot`}>
        <input className="button"  id="addAShot" value="Add a shot" />
      </Link>
    </div>
  )
}

export default ClubShowPage
