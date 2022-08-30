import React from 'react'
import './PrimaryButton.css'

const PrimaryButton = ({ buttonText, onClicked }) => {
  return (
    <button onClick={onClicked}>{buttonText}</button>
  )
}

export default PrimaryButton