import React from 'react'
import { Col } from "reactstrap";
import { Link } from 'react-router-dom'
import './character.scss'

import { CharacterType, characterType } from '../../proptypes/index';

const Character = ({ character }) => {
  return (
    <Col md='3' xs='6'>
      <Link to={`/character/${character.id}`} className='character__link'>
        <div className='card character'>
          <img className='card-img-top character__thumbnail' src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
          <h6 className='card-footer character__name'>{character.name} </h6>
        </div>
      </Link>
    </Col>
  );


}

Character.propTypes = {
  character: characterType
}

export default Character;