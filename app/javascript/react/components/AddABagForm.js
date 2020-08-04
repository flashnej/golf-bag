import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"


const AddABagForm = (props) => {
  const [bagName, setBagName] = useState('')
  const [redirect, setRedirect] = useState(false)

  const createBag = (event) => {
    event.preventDefault()
    fetch('/api/v1/bags', {
      method: "POST",
      body: JSON.stringify({name: bagName}),
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
    console.log(bagName)
  }

  const handleChange = (event) => {
    setBagName(event.target.value)
  }

  if (redirect) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <form onSubmit={createBag}>
        <label> Name:
          <input type="text" id="name" onChange={handleChange} value={bagName} />
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddABagForm
