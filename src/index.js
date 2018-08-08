import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './assets/scss/main.scss'

import Character from './components/character'

import characters  from './mockup.json'



console.log();

class App extends Component {
  constructor(){
    super();
    var Characters = characters.results.map( e => 
      {
        return (<Character name={e.name} thumbnail={e.thumbnail.path + '.'+ e.thumbnail.extension} />)
      });
    this.state = {
      Characters
    }
  }

  render() {
    return (
      <div className='dcc'>
        <div className='container'>
          <div className='row'>
            { this.state.Characters }
          </div>
        </div>
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'))