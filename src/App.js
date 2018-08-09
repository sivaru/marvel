import React, { Component } from 'react'
import { BrowserRouter, Route , Link} from 'react-router-dom'

import './assets/scss/main.scss'

/* pages */
import Home from './pages/home/'
import Comics from './pages/comics/'
import Navigation  from "./components/navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          
          <div className='row'>
            <Navigation />
            

            <div className='container'>
              <Route exact path='/' component={Home} />
              <Route path='/comics' component={Comics} />
            </div>
          </div>
          
        </div>
      </BrowserRouter>
    )
  }
}

export default App;