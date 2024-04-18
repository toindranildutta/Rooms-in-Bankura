import React from 'react'
import logoimage from '../assets/logo.png'

const Logo = ({width = '100px'}) => {
  return (
    <img src={logoimage} alt="Logo" width={width} />
  )
}

export default Logo