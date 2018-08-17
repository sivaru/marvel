import React from 'react'
import { Col } from "reactstrap";
import { Link } from 'react-router-dom'
import './charactercard.scss'

import { characterType } from '../../proptypes/index';

const CharacterCard = ({ character }) => {
  return (
    <Col md='3' xs='6'>
      <Link to={`/characters/${character.id}`} className='character-card__link'>
        <div className='card character-card'>
          <img className='card-img-top character-card__thumbnail' src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
          <h6 className='card-footer character-card__name'>{character.name} </h6>
        </div>
      </Link>
    </Col>
  );


}

CharacterCard.propTypes = {
  character: characterType
}

export default CharacterCard;