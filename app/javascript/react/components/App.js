import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import HomePage from "./HomePage"
import AddABagForm from "./AddABagForm"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/addABag" component={AddABagForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
