import React from 'react'

import Character from '../../components/character'
import Loading from '../../components/loading'

import './characterlist.scss'

const api = 'https://gateway.marvel.com:443/v1/public/characters?apikey=1535cfba2d65e7a268cf7cc79d377bd1';

class CharacterList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            characters : [],
            offset : 0,
            isLoading: true,
            total : 0,
            searchParam : ''
        }
    }

    render(){
        return (
          this.state.isLoading ?
          <div className='container'>
            <Loading />
          </div>
          :
          <div className='container character-list__container'>
            <div className='d-flex justify-content-between'>
              <div>
                <input type='text'
                  value={this.state.searchParam}
                  onChange={(event) => { this.setState({searchParam: event.target.value})}}
                  placeholder='Search...' />

                <input type='button' onClick={this.searchCharacters} value='Search' />
              </div>
              <div>
                <input type='button' onClick={this.fetchCharacters.bind(this, -20)} disabled={!this.state.offset > 0} value='Prev.' />
                <input type='button' onClick={this.fetchCharacters.bind(this, 20)} disabled={(this.state.total-this.state.offset < 20)} value='Next' />
              </div>
            </div>
            <div className='row'>
              {
                this.state.characters.map( e => this.generateCharacter(e))
              }
            </div>
          </div>
        );
    }

    generateCharacter = (character) =>  <Character character={character} key={character.id} />;

    componentDidMount(){//Here we have access to DOM
        //do fetch and api calls in here using this.SetState() (this will cause the component to re-render)
        this.fetchCharacters(0);
    }

    fetchCharacters = (offset) => {
        offset += this.state.offset;
        this.setState({isLoading : true,
                    offset: offset});
        fetch(api+'&offset='+offset)
            .then(response => response.json())
            .then(data => this.setState({characters : data.data.results,
                                         isLoading : false,
                                         total : data.data.total}));
    }
    
    searchCharacters = () => {
        this.setState({isLoading : true});
        if (this.state.searchParam != '')
            fetch(`${api}&nameStartsWith=${this.state.searchParam}`) 
                .then(response => response.json())
                .then(data => this.setState({characters : data.data.results,
                                            isLoading : false,
                                            total : data.data.total,
                                            offset: 0}));
        else
        this.fetchCharacters(0);
    }

}


export default CharacterList