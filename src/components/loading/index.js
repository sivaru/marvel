import React from 'react'

import './loading.scss'

const Loading = (props) => {
  return (
    <div className='d-flex justify-content-center loading'>
      <div>
        <div className='loading__icon' />
        <h1 className='loading__heading'>Loading...</h1>
      </div>
    </div>
     );
}

export default Loading;