import React, { useState, useEffect } from "react"
import { Chart } from "react-google-charts"

const DistanceTableTile = (props) => {

  let [data, setData] = useState([])
  let [surface, setSurface] = useState("fairway")

  useEffect(() => {
    fetchData(surface)
  }, [])

  let title = surface.charAt(0).toUpperCase() + surface.slice(1)

  const fetchData = (value) => {
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
      <div className="chart">
        <Chart
          class="chart"
          chartType="ScatterChart"
          loader={<div className="loading"><p>Loading Chart...</p></div>}
          width="100%"
          height="400px"
          data={data}
          options={{
            title:`${title} Distances`,
            titleTextStyle: {
              fontSize: 36,
              align: 'center'
            },
            colors: ['green', '#fffb8c', 'red'],
            vAxis: {
              title: 'Yards',
              minValue: 0
            },
            backgroundColor: 'none',
          }}
        />
      </div>
    </div>
  )
}

export default DistanceTableTile
