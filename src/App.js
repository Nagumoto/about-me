import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import AboutMePage from './AboutMePage'
import WorkExperiencePage from './WorkExperiencePage'
import ProjectPage from './ProjectPage'

class App extends Component {

  render = () => {
    return (
          <Switch>
            <Route exact path="/" component={AboutMePage} />
            <Route path="/work-history" component={WorkExperiencePage} />
            <Route path="/projects" component={ProjectPage} />
          </Switch>
    )
  }
}

export default App
