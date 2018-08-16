import React from 'react'
import { Row } from "reactstrap";

import './comiclistitem.scss'
const ComicListItem = ({ comic }) => {
  return (
    <Row className='comic-list-item '>
      <div className='d-flex justify-content-around'>
        <img className='comic-list-item__thumbnail align-self-center' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
        <div>
          <h6>{comic.title}</h6>
          <p>{comic.description ? comic.description : 'There\'s no description available for this comic'}</p>
        </div>
      </div>
    </Row>
  );
}


export default ComicListItem;