import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Play from './Components/Pages/Play'
import HomePage from './Components/Pages/HomePage'
import RecentsPage from './Components/Pages/RecentsPage'
import AboutPage from './Components/Pages/AboutPage'
import WorldwidePage from './Components/Pages/WorldwidePage'
import LibraryPage from './Components/Pages/LibraryPage'
import NotFound from './Components/Pages/NotFound'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/recents" component={RecentsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/worldwide" component={WorldwidePage} />
          <Route exact path="/library" component={LibraryPage} />
          <Route exact path="/library" component={LibraryPage} />

          <Route exact path="/play" component={Play} />
          <Route path="/t" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
