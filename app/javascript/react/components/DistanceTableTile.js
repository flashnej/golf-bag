import React from "react"
import { Chart } from "react-google-charts"

const DistanceTableTile = (props) => {


  let title = props.surface.charAt(0).toUpperCase() + props.surface.slice(1)

  return (
    <div className="chart">
    <p> {title} </p>
      <Chart
        class="chart"
        chartType="ScatterChart"
        loader={<div className="loading"><p>Loading Chart...</p></div>}
        width="100%"
        height="400px"
        data={props.data}
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
  )
}

export default DistanceTableTile
