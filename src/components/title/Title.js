import React from 'react'
import './Title.css'
import { useState } from 'react';

const Title = ({ title }) => {
  
  return (
    <div>
        <p className="title">{title}</p>
    </div>
  )
}

export default Title