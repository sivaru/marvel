import React from 'react'
import { Col } from "reactstrap";
import { Link } from 'react-router-dom'

import './comiccard.scss'


const ComicCard = ({ comic }) => {
  return (
    <Col md='3' xs='6'>
      <Link to={`/comics/${comic.id}`} className='comic-card__link'>
        <div className='card comic-card'>
          <img className='card-img-top comic-card__thumbnail' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
          <h6 className='card-footer comic-card__name'>{comic.title} </h6>
        </div>
      </Link>
    </Col>
  );


}



export default ComicCard;