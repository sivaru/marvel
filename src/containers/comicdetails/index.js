import React from 'react';

import ComicsDetails from '../../components/comicdetails';

import Loading from '../../components/loading';

const api = 'https://gateway.marvel.com:443/v1/public/comics/';
const apiKey = '?apikey=1535cfba2d65e7a268cf7cc79d377bd1';
 
class ComicDetailsContainer extends React.Component {
  state = {
    comic: [],
    isLoading: true,
  }
  render() {
    return (this.state.isLoading
      ? <Loading />
      :
      this.generateComicsDetails( this.state.comic))
  }

  componentDidMount() {
    this.fetchComics();
  }

  fetchComics = () =>
    fetch(`${api}${this.props.id}${apiKey}`)
      .then(response => response.json())
      .then(data => this.setState(
        {
          comic: data.data.results[0],
          isLoading: false
        }))

 
  generateComicsDetails = (comic) => <ComicsDetails comic={comic} key={comic.id} />
}

export default ComicDetailsContainer;