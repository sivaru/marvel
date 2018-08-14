import React from 'react'
import {Row, Col, Container} from 'reactstrap'

import './characterdetails.scss'

const CharacterDetails = ({character}) => {
   return (
     <Container className='character-details'>
       <Row>

         <Col md='4'>
           <div className='d-flex justify-content-center'>
             <img className='character-details__image' src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
          </div>
         </Col>

         <Col md='8'>
           <div className='d-flex justify-content-center'> 
            <h1>{character.name}</h1>
          </div>
       
           <div className='d-flex justify-content-center'>
            <p>{character.description ? character.description : 'There\'s no description available.'}</p>
          </div>
         </Col>
       </Row>

        
     </Container>
    )
}

CharacterDetails.propTypes = {
  character: characterType
}

export default CharacterDetails;