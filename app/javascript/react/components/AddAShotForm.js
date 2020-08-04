import React, { useState, useEffect } from "react"
import { Link, Redirect } from "react-router-dom"

const AddAShotForm = (props) => {
  const [distance, setDistance] = useState('')
  const [redirect, setRedirect] = useState(false)

  const club = props.match.params.id

  const createShot = (event) => {
    event.preventDefault()
    fetch('/api/v1/shots', {
      method: "POST",
      body: JSON.stringify({distance: distance, club: club}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      if (response.ok) {
        setRedirect(true)
      } else {
        debugger
      }
    })
    console.log(distance)
  }

  const handleChange = (event) => {
    setDistance(event.target.value)
  }

  if (redirect) {
    return <Redirect to={`../club/${club}`} />
  }

  return (
    <div>
      <form onSubmit={createShot}>
        <label> Distance:
          <input type="text" id="name" onChange={handleChange} value={distance} />
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddAShotForm
