import React from 'react'
import { Row, Col, Container } from 'reactstrap'

import ComicListitem from '../comiclistitem'
import { characterType } from "../../proptypes/";
import './characterdetails.scss'
import Loading from '../loading';

const api = 'https://gateway.marvel.com:443/v1/public/characters/';
const apiKey = '?apikey=1535cfba2d65e7a268cf7cc79d377bd1';

class CharacterDetails extends React.Component {
  state = {
    comics: [],
    isLoading: true
  }

  render() {
    return (
      <Container className='character-details'>
        <Row>
          <Col md='4'>
            <div className='d-flex justify-content-center'>
              <img className='character-details__image' src={`${this.props.character.thumbnail.path}.${this.props.character.thumbnail.extension}`} alt={this.props.character.name} />
            </div>
          </Col>

          <Col md='8'>
            <Row>
              <div className='d-flex justify-content-center'>
                <h1>{this.props.character.name}</h1>
              </div>
            </Row>

            <Row>
              <div className='d-flex justify-content-center'>
                <p>{this.props.character.description ? this.props.character.description : 'There\'s no description available.'}</p>
              </div>
            </Row>



            {this.state.isLoading
              ? <div className='d-flex justify-content-center'> <Loading className='align-self-center' /></div>
              : this.state.comics.length > 0 
              ? <Row>
              <h5>Appears in :</h5>
              <Container className='character-details__comic-list'>
                {this.state.comics.map(e => this.generateComicListitem(e))}
              </Container>
            </Row> :
              <Row>
                <h5>There's no info on comics for this character.</h5>
                </Row>
            }


          </Col>
        </Row>
      </Container>
    )
  }

  componentDidMount() {
    this.fetchComicsList();
  }

  fetchComicsList = () =>
    fetch(`${api}${this.props.character.id}/comics${apiKey}`)
      .then(response => response.json()
        .then(data =>
          this.setState({
            comics: data.data.results,
            isLoading: false
          })
        ))


  generateComicListitem = (e) => { return (<ComicListitem comic={e} />) }

}



CharacterDetails.propTypes = {
  character: characterType
}

export default CharacterDetails;