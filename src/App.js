import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './containers/home'
import Favicon from 'react-favicon'
import favicon from './assets/logo-sodi128.png'

class App extends Component {
  render() {
    return (
      <div>
        <Favicon url={favicon} />
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    )
  }
}

export default App
