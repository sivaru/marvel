import React from 'react'
import { Row } from "reactstrap";
import {Link} from 'react-router-dom'

import './comiclistitem.scss'

function extractId(url) {
  const index = url.lastIndexOf('/') + 1;
  return url.slice(index, url.length)
}

const ComicListItem = ({ comic }) => {
 

  return (
   <Link className='comic-list-item__link' to={`/comics/${extractId(comic.resourceURI)}`}>
    <Row className='comic-list-item '>
      <div className='d-flex justify-content-around'>
        <img className='comic-list-item__thumbnail align-self-center' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
        <div>
          <h6>{comic.title}</h6>
          <p>{comic.description ? comic.description : 'There\'s no description available for this comic'}</p>
        </div>
      </div>
    </Row>
   </Link>
  );
}


export default ComicListItem;