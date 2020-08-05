import React, { useState, useEffect } from "react"
import { Link, Redirect } from "react-router-dom"

const AddAShotForm = (props) => {
  const [distance, setDistance] = useState('')
  const [shotQuality, setShotQuality] = useState('average')
  const [surface, setSurface] = useState('')
  const [redirect, setRedirect] = useState(false)

  const club = props.match.params.id

  const createShot = (event) => {
    event.preventDefault()
    fetch(`/api/v1/clubs/${club}/shots`, {
      method: "POST",
      body: JSON.stringify({distance: distance, club: club, shotQuality: shotQuality, surface: surface}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      if (response.ok) {
        setRedirect(true)
        console.log(distance)
      } else {
        debugger
      }
    })
  }

  const handleChange = (event) => {
    if (event.target.id === "distance") {
      setDistance(event.target.value)
    } else if (event.target.id === "shotQuality") {
        setShotQuality(event.target.value)
    } else if (event.target.id === "surface") {
      setSurface(event.target.value)
    }
  }

  if (redirect) {
    return <Redirect to={`../club/${club}`} />
  }

  return (
    <div>
      <form onSubmit={createShot}>
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
        <label> Shot Quality:
          <select value={shotQuality} onChange={handleChange} id="shotQuality">
            <option value="good">Good</option>
            <option value="bad">Bad</option>
            <option value="average">Average</option>
          </select>
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddAShotForm
