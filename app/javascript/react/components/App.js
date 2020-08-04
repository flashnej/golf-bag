import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import HomePage from "./HomePage"
import AddAClubForm from "./AddAClubForm"
import ClubShowPage from "./ClubShowPage"
import AddAShotForm from "./AddAShotForm"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/addAClub" component={AddAClubForm} />
        <Route exact path="/club/:id" component={ClubShowPage} />
        <Route exact path="/:id/addAShot" component={AddAShotForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
