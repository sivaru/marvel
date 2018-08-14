import React from 'react'

import './characters.scss'
import CharacterList from '../../containers/characterlist'

export default class Home extends React.Component {
  render () {
    return (
      <div className='characters'>
        <CharacterList />
      </div>
    )
  }
}