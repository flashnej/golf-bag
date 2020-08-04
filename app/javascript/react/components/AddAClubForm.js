import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"


const AddAClubForm = (props) => {
  const [clubName, setClubName] = useState('')
  const [redirect, setRedirect] = useState(false)

  const createClub = (event) => {
    event.preventDefault()
    fetch('/api/v1/clubs', {
      method: "POST",
      body: JSON.stringify({name: clubName}),
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
    console.log(clubName)
  }

  const handleChange = (event) => {
    setClubName(event.target.value)
  }

  if (redirect) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <form onSubmit={createClub}>
        <label> Name:
          <input type="text" id="name" onChange={handleChange} value={clubName} />
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddAClubForm
