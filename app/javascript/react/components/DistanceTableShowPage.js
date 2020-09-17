import React, { useState, useEffect } from "react"
import { Chart } from "react-google-charts"

import DistanceTableTile from "./DistanceTableTile"

const DistanceTableShowPage = (props) => {
  let [surface, setSurface] = useState("fairway")
  let [data, setData] = useState([])

  useEffect(() => {
    fetchData("fairway")
  }, [])

  const fetchData = (value) => {
    setSurface(value)
    fetch(`/api/v1/distanceTable/${value}`)
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
          debugger
        } else {
          setData(body)
        }
      })
    }

  const changeSurface = (event) => {
    fetchData(event.currentTarget.value)
    setSurface(event.currentTarget.value)
  }

  let distanceTable = <DistanceTableTile
                        surface={surface}
                        data={data}
                        />


  return (
    <div>
      <label>
        View shots hit from:
        <select value={surface} onChange={changeSurface} className="selector">
          <option value="fairway">Fairway</option>
          <option value="tee shot">Tee Box</option>
          <option value="rough">Rough</option>
          <option value="sand">Sand</option>
        </select>
      </label>
      {distanceTable}
    </div>
  )
}

export default DistanceTableShowPage
