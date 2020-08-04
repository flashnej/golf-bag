import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import HomePage from "./HomePage"
import AddABagForm from "./AddABagForm"
import BagShowPage from "./BagShowPage"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/addABag" component={AddABagForm} />
        <Route exact path="/bag/:id" component={BagShowPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
