import React from 'react'

const Character = (props) => {
  return (
    <div className='col-6 col-md-3 mt-2'>
      <div className='card'>
        <img className='card-img-top' src={props.thumbnail}  />
        <div className='card-body'>
          <h5 className='card-title'>{ props.name } </h5>
        </div>
      </div>
    </div>
  );
}

export default Character;