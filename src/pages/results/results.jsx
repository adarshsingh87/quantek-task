import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CardComponent from '../../components/cardComponent/cardComponent'

import './results.css'

const Results = () => {
  const location = useLocation()
  let navigate = useNavigate()
  const resData = location.state.data

  return (
    <div className='index-page__container'>
      <div className='results-page__header'>
        <h1 className='index-page__heading' style={{ margin: '0' }}>
          Results
        </h1>
        <button
          className='index-page__submit-btn'
          style={{ margin: '0' }}
          onClick={() => navigate(-1)}
        >
          Run Again
        </button>
      </div>
      <div className='results__card-container'>
        {resData.map((e, i) => {
          return <CardComponent repCode={e.repCode} count={e.count} componentName={e.componentName} key={i} />
        })}
      </div>
    </div>
  )
}

export default Results
