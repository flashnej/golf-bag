import React, { useState, useEffect } from "react"
import { Chart } from "react-google-charts"

const DistanceTableTile = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/v1/shots')
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
  }, [])


  return (
    <div className="chart">
      <Chart
        class="chart"
        chartType="ScatterChart"
        loader={<div className="loading"><p>Loading Chart...</p></div>}
        width="100%"
        height="400px"
        data={data}
        options={{
          colors: ['green', '#fffb8c', 'red'],
          vAxis: {
            title: 'Yards',
            minValue: 0,
            gridLine: {color: 'green'},
          },
          backgroundColor: 'none',
          boxStyle: {
            strokeWidth:30
          }
        }}
      />
</div>
  )
}

export default DistanceTableTile
