import React from 'react'

import ComicDetailsContainer from '../../containers/comicdetails/'


class CharacterDetails extends React.Component {
    render () {
  

     return (<ComicDetailsContainer id={this.props.match.params.id} />);
    }
  }
  export default CharacterDetails