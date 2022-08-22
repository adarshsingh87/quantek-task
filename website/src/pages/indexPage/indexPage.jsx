import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './indexPage.css'

const IndexPage = () => {
  const [code, setCode] = useState('')

  let navigate = useNavigate()

  const handleSubmit = () => {
    fetch(`http://127.0.0.1:5000/get-dups?html=${code.toString()}`)
      .then((response) => response.json())
      .then((data) => navigate('/results', {state: {data}} ))
  }

  return (
    <div className='index-page__container'>
      <h1 className='index-page__heading'>Find Similar Nodes</h1>
      <h6 className='index-page__h6'>Paste HTML in textbox below</h6>
      <textarea
        name='htmlInp'
        className='index-page__html-input'
        placeholder='Paste the code here'
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button className='index-page__submit-btn' onClick={handleSubmit}>
        Process Code
      </button>
    </div>
  )
}

export default IndexPage