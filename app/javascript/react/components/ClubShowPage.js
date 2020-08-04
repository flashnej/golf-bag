import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ClubShowPage = (props) => {
  const [club, setClub] = useState({})
  const [shots, setShots] = useState([])
  const [surface, setSurface] = useState('')
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

  const handleChange = (event) => {
      setSurface(event.target.value)
  }

  let teeShotList
  let roughShotList
  let sandShotList
  let fairwayShotList
  if (shots.length !== 0) {
    teeShotList = shots.teeShots.map((shot) => {
      return(<li>{shot.distance} yards / {shot.shot_quality} / {shot.surface}</li>)
    })
    roughShotList = shots.rough.map((shot) => {
      return(<li>{shot.distance} yards / {shot.shot_quality} / {shot.surface}</li>)
    })
    sandShotList = shots.sand.map((shot) => {
      return(<li>{shot.distance} yards / {shot.shot_quality} / {shot.surface}</li>)
    })
    fairwayShotList = shots.fairway.map((shot) => {
      return(<li>{shot.distance} yards / {shot.shot_quality} / {shot.surface}</li>)
    })
  }

  return (
    <div>
    <h1>{club.name}</h1>
    <form>
      <label> Surface:
        <select value={surface} onChange={handleChange} id="surface">
          <option value=""></option>
          <option value="tee shot">Tee Shot</option>
          <option value="fairway">Fairway</option>
          <option value="rough">Rough</option>
          <option value="sand">Sand</option>
        </select>
      </label>
    </form>
    <h4>Tee Shots </h4>
      <ul>
        {teeShotList}
      </ul>
      <h4>Rough Shots </h4>
        <ul>
          {roughShotList}
        </ul>
        <h4>Fairway Shots </h4>
          <ul>
            {fairwayShotList}
          </ul>
          <h4>Sand Shots </h4>
            <ul>
              {sandShotList}
            </ul>
      <Link to={`../${club.id}/addAShot`}>
        <input className="button"  id="addAShot" value="Add a shot" />
      </Link>
    </div>
  )
}

export default ClubShowPage
