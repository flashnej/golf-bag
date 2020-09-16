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
    <div>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={data}
      />
</div>
  )
}

export default DistanceTableTile
