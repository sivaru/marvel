import React from 'react'

import Character from '../../components/character'

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

        this.fetchCharacters = this.fetchCharacters.bind(this);
        this.searchCharacters = this.searchCharacters.bind(this);
    }

    render(){
        if(this.state.isLoading){
            return (<h1> loading</h1>);
        }
        else
        return (
          <div className='container'>
            <div className="row">
              <input type='button' onClick={this.fetchCharacters.bind(this, -20)} disabled={!this.state.offset > 0} value='Prev.' />
              <input type='text'
                value={this.state.searchParam}
                onChange={(event) => { this.setState({searchParam: event.target.value})} }
                placeholder='Search...' />

              <input type='button' onClick={this.searchCharacters} value='Search' />
                
              <input type='button' onClick={this.fetchCharacters.bind(this, 20)} disabled={(this.state.total-this.state.offset < 20)} value='Next' />
            </div>
            <div className='row'>
              {
                this.state.characters.map( e =>
                       (<Character name={e.name} thumbnail={e.thumbnail.path + '.'+ e.thumbnail.extension} key={e.id} />)) 
              }
            </div>
          </div>
        );
    }

    componentDidMount(){//Here we have access to DOM
        //do fetch and api calls in here using this.SetState() (this will cause the component to re-render)
        this.fetchCharacters(0);
    }

    fetchCharacters(offset){
        offset += this.state.offset;
        this.setState({isLoading : true,
                    offset: offset});
        fetch(api+'&offset='+offset)
            .then(response => response.json())
            .then(data => this.setState({characters : data.data.results,
                                         isLoading : false,
                                         total : data.data.total}));
    }
    
    searchCharacters(){
        this.setState({isLoading : true});
        if (this.state.searchParam != '')
            fetch(api+'&nameStartsWith='+this.state.searchParam)
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