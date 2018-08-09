import React from 'react'

import Character from '../../components/character'

const api = 'https://gateway.marvel.com:443/v1/public/characters?apikey=1535cfba2d65e7a268cf7cc79d377bd1';

class CharacterList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            characters : [],
            offset : 0,
            isLoading: true
        }

        this.fetchCharacters = this.fetchCharacters.bind(this);
    }

    render(){
        if(this.state.isLoading){
            return (<h1> loading</h1>);
        }
        else
        return (
          <div className='container'>
            <input type='button' onClick={this.fetchCharacters.bind(this, -20)} disabled={!this.state.offset > 0} value='Prev.' />
            <input type='button' onClick={this.fetchCharacters.bind(this, 20)} value='Next' />
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
            .then(data => this.setState({characters : data.data.results, isLoading : false}));
    }

}


export default CharacterList