import React from 'react';

import CharacterDetails from '../../components/characterdetails';

import Loading from '../../components/loading';

const api = 'https://gateway.marvel.com:443/v1/public/characters/';
const apiKey = '?apikey=1535cfba2d65e7a268cf7cc79d377bd1';

class CharacterDetailsContainer extends React.Component {
  state = {
    character: [],
    comics: [],
    isLoading: true,
  }
  render() {
    return (this.state.isLoading
      ? <Loading />
      :
      this.generateCharacterDetails(this.state.character, this.state.comics))
  }

  componentDidMount() {
    this.fetchCharacter();
  }

  fetchCharacter = () =>
    fetch(`${api}${this.props.id}${apiKey}`)
      .then(response => response.json())
      .then(data => this.setState(
        {
          character: data.data.results[0],
          isLoading: false
        }))

 
  generateCharacterDetails = (character, comics) => <CharacterDetails character={character} comics={comics} key={character.id} />
}

export default CharacterDetailsContainer;