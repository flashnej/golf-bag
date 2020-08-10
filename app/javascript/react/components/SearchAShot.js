import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const SearchAShot = (props) => {
  const [distance, setDistance] = useState('')
  const [surface, setSurface] = useState('')
  const [shots, setShots] = useState([])

  const searchShot = (event) => {
    event.preventDefault()
    fetch(`/api/v1/shots/${distance}/${surface}`)
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        debugger
      }
    })
    .then((response) => response.json())
    .then((body) => {
      setShots(body.shots)
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }

  const handleChange = (event) => {
    if (event.target.id === "distance") {
      setDistance(event.target.value)
    } else if (event.target.id === "surface") {
      setSurface(event.target.value)
    }
  }

  let recomendedShotTile
  if (shots.length !== 0) {
    recomendedShotTile = shots.map((shot) => {
      return(
        <li>{shot[0]} / {shot[1].distance} yards / {shot[1].shot_quality}</li>
      )
    })
  }




  return (
    <div>
      <form onSubmit={searchShot}>
        <label> Distance:
          <input type="number" id="distance" onChange={handleChange} value={distance} />
        </label>
        <label> Surface:
          <select value={surface} onChange={handleChange} id="surface">
            <option value=""></option>
            <option value="tee shot">Tee Shot</option>
            <option value="fairway">Fairway</option>
            <option value="rough">Rough</option>
            <option value="sand">Sand</option>
          </select>
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
      <h1> Shots</h1>
      <ul>
      {recomendedShotTile}
      </ul>
    </div>
  )
}

export default SearchAShot
