import React from 'react'

import './characters.scss'
import CharacterCardList from '../../containers/charactercardlist'

export default class Home extends React.Component {
  render () {
    return (
      <div className='characters'>
        <CharacterCardList />
      </div>
    )
  }
}