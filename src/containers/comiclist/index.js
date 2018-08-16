import React from 'react'

import ComicListItem from '../../components/comiclistitem'
import Loading from '../../components/loading'

const api = 'https://gateway.marvel.com:443/v1/public/characters/';
const apiKey = '?apikey=1535cfba2d65e7a268cf7cc79d377bd1';

class ComicList extends React.Component{
  state = {
    isLoading : true,
    comics : []
  }

  render(){
    console.log(this.props);
    return ( this.state.isLoading ? 
              <Loading /> 
            :
            this.state.comics.map( e => this.generateComicListItem(e) )
          )
  }

  componentDidMount(){
    this.fetchComics();
  }

  fetchComics = () => {
    fetch(`${api}${this.props.id}/comics${apiKey}`)
      .then(response => response.json())
      .then(data => 
        this.setState({
        comics: data.data.results,
        isLoading: false
      }))
    }

  generateComicListItem = (e) => <ComicListItem comic={e} key={e.id} />
}

export default ComicList