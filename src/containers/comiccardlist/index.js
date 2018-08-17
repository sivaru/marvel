import React from 'react'

import ComicCard from '../../components/comiccard'
import Loading from '../../components/loading'
import { connect } from 'react-redux'

import { Container, Row, Input, Button } from 'reactstrap'

import './comiccardlist.scss'
import get20Comics from '../../redux/actionCreators/comics'
import searchComics from '../../redux/actionCreators/comicsSearch'


const api = 'https://gateway.marvel.com:443/v1/public/comics';
const apiKey = '?apikey=1535cfba2d65e7a268cf7cc79d377bd1';

class ComicCardList extends React.Component {
  
  state = {
    offset: 0,
    searchParam: '',
    searchNavigation: '',
  }
 
  render() {
    return (this.props.isLoading ?
      <Loading />
      :
      <Container className='comic-card-list__container'>
        <div className='d-flex justify-content-between comic-card-list__form'>
            <div>
              <Input type='text'
                className='inline'
                value={this.state.searchParam}
                onChange={(event) => { this.setState({ searchParam: event.target.value }) }}
                placeholder='Search...' />
                
              <Button type='button' onClick={this.searchComics}>Search</Button>
            </div>
            <div>
              <Button type='button' onClick={this.navigateComicsList.bind(this, -20)} disabled={!this.state.offset > 0} >Prev</Button>
              <Button type='button' onClick={this.navigateComicsList.bind(this, 20)} disabled={this.props.total - this.state.offset <= 20}>Next</Button>
            </div>
          </div>
          {this.props.isSearch ? <p>{this.props.total} comics where found</p>: ''}
        <Row>
          {this.props.comics.map(e => this.generateComicCard(e))}
        </Row>
      </Container>
    )
  }

  componentDidMount() {
    this.fetchComics();
  }



   searchComics = () => {
    const searchParam = this.state.searchParam;
    this.setState({
      offset: 0,
      searchNavigation: searchParam
    });
    if (searchParam != '')
      this.props.searchComics(searchParam, 0)
  }

  generateComicCard = (e) => <ComicCard comic={e} key={e.id} />

  componentDidMount(){
    this.props.get20Comics();
  }

  navigateComicsList = async (offset) => {
    const newOffset = this.state.offset + offset;
    await this.setState({ offset: newOffset });

    if (!this.props.isSearch) {
      this.props.get20Comics(newOffset);
    } else {
      this.props.searchComics(this.state.searchNavigation, newOffset);
    }
  }


}


const mapStateToProps = state => ({
  comics: state.comics.comics,
  isLoading: state.comics.isLoading,
  isSearch: state.comics.isSearch,
  total: state.comics.total,
  error: state.comics.error
})

const mapDispatchToProps = {
  get20Comics,
  searchComics
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicCardList)