import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import BagTile from "./BagTile.js"

const HomePage = (props) => {
  const [bags, setBags] = useState([])

  useEffect(() => {
    fetchBags()
  }, [])

  const fetchBags = () => {
    fetch('/api/v1/bags')
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        debugger
      }
      })
      .then((response) => response.json())
      .then((body) => {
        setBags(body.bags)
        console.log(body.bags[0].name)
      })
  }

  let bagTiles
  if (bags.length !== 0) {
    bagTiles = bags.map((bag) => {
      return <BagTile
              key={bag["id"]}
              bag={bag}
            />
    })
  }

  return (
    <div>
      <h1> Your Bags: </h1>
      {bagTiles}
      <Link to="/addABag">
        <input className="button"  id="addABag" value="Add a bag" />
      </Link>
    </div>
  )
}

export default HomePage
