import React from 'react'

import './cardComponent.css'

const CardComponent = (props) => {
  return (
    <div className='card__container'>
      <div
        className='card__componentDisplay'
        dangerouslySetInnerHTML={{ __html: props.repCode }}
      ></div>
      <div className='card__data'>
        <h4 className='card__heading'>Name</h4>
        <p className='card__data-values'>{props.componentName}</p>
        <h4 className='card__heading'>Occurrences</h4>
        <p className='card__data-values'>{props.count}</p>
      </div>
    </div>
  )
}

export default CardComponent
