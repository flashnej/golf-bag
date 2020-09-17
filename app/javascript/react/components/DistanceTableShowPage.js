import React, { useState } from "react"
import { Chart } from "react-google-charts"

import DistanceTableTile from "./DistanceTableTile"

const DistanceTableShowPage = (props) => {

  let distanceTable = <DistanceTableTile />


  return (
    <div>
      {distanceTable}
    </div>
  )
}

export default DistanceTableShowPage
