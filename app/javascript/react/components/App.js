import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import HomePage from "./HomePage"
import ClubShowPage from "./ClubShowPage"
import AddAShotForm from "./AddAShotForm"
import SearchAShot from "./SearchAShot"
import ForceSignIn from "./ForceSignIn"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/club/:id" component={ClubShowPage} />
        <Route exact path="/:id/addAShot" component={AddAShotForm} />
        <Route exact path="/searchAShot" component={SearchAShot} />
        <Route exact path="/forceSignIn" component={ForceSignIn} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
