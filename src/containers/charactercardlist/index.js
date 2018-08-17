import React from 'react'

import CharacterCard from '../../components/charactercard'
import Loading from '../../components/loading'
import { connect } from 'react-redux'
import "babel-polyfill";
import { Input, Button, Container } from 'reactstrap'

import get20Characters from '../../redux/actionCreators/characters'
import searchCharacters from '../../redux/actionCreators/charactersSearch'
import './charactercardlist.scss'

const api = 'https://gateway.marvel.com:443/v1/public/characters?apikey=1535cfba2d65e7a268cf7cc79d377bd1';

class CharacterCardList extends React.Component {

  state = {
    offset: 0,
    searchParam: '',
    searchNavigation: '',
  }


  render() {
    return (
      this.props.isLoading ?
        <div className='container'>
          <Loading />
        </div>
        :
        <Container className=' character-card-list__container'>
          <div className='d-flex justify-content-between character-card-list__form'>
            <div>
              <Input type='text'
                className='inline'
                value={this.state.searchParam}
                onChange={(event) => { this.setState({ searchParam: event.target.value }) }}
                placeholder='Search...' />

              <Button type='button' onClick={this.searchCharacters}>Search</Button>
            </div>
            <div>
              <Button type='button' onClick={this.navigateCharactersList.bind(this, -20)} disabled={!this.state.offset > 0} >Prev</Button>
              <Button type='button' onClick={this.navigateCharactersList.bind(this, 20)} disabled={this.props.total - this.state.offset <= 20}>Next</Button>
            </div>
          </div>
          <div className='row'>
          
            {
             this.props.total === 0 ? <h1> No characters were found. </h1>: this.props.characters.map(e => this.generateCharacter(e))
            }
          </div>
        </Container>
    );
  }

  generateCharacter = (character) => <CharacterCard character={character} key={character.id} />;

  componentDidMount() {//Here we have access to DOM
    //do fetch and api calls in here using this.SetState() (this will cause the component to re-render)
    this.props.get20Characters();
  }

  navigateCharactersList = async (offset) => {
    const newOffset = this.state.offset + offset;
    await this.setState({ offset: newOffset });

    if (!this.props.isSearch) {
      this.props.get20Characters(newOffset);
    } else {
      this.props.searchCharacters(this.state.searchNavigation, newOffset);
    }
  }

  searchCharacters = () => {
    const searchParam = this.state.searchParam;
    this.setState({
      offset: 0,
      searchNavigation: searchParam
    });
    if (searchParam != '')
      this.props.searchCharacters(searchParam, 0)
  }


}

const mapStateToProps = state => ({
  characters: state.characters.characters,
  isLoading: state.characters.isLoading,
  isSearch: state.characters.isSearch,
  total: state.characters.total,
  error: state.characters.error
})

const mapDispatchToProps = {
  get20Characters,
  searchCharacters
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCardList)