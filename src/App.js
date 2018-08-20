import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import './assets/scss/main.scss'

/* pages */
import Home from './pages/home/'
import Comics from './pages/comics/'
import CharacterDetails from "./pages/characterdetails";
import ComicDetails from "./pages/comicdetails";
import Footer from "./components/footer";

/* containers */
import Navigation from "./components/navigation";
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div>
            <header>
              <div className='row'>
                <Navigation />
              </div>
            </header>
            <main>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/comics' component={Comics} />
                <Route path='/comics/:id' component={ComicDetails} />
                <Route path='/characters/:id' component={CharacterDetails} />
              </Switch>
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </BrowserRouter>

      </Provider>
    )
  }
}

export default App;