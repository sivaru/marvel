import React from 'react'
import { Col } from "reactstrap";

const Character = (props) => {
  return (
    <Col md='3' xs='6'> 
      <div className='card'>
        <img className='card-img-top' src={props.thumbnail}  />
        <h6 className='card-footer'>{ props.name } </h6>
        
      </div>
    </Col>
  );
}

export default Character;