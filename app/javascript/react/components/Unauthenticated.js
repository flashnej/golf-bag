import React from "react"
import { Link } from "react-router-dom"

import unauthenticated from '../../../assets/images/unauthenticated.png'

const Unauthenticated = (props) => {

  return (
    <div>
          <img src={unauthenticated} alt="Please sign in" />
    </div>
  )
}

export default Unauthenticated
