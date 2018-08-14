import React from 'react'

import CharacterDetailsContainer from  '../../containers/characterdetails'

class CharacterDetails extends React.Component {
    render () {
     return (<CharacterDetailsContainer id={this.props.match.params.id} />);
    }
  }
  export default CharacterDetails