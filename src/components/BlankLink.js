import React from 'react'

const BlankLink = ({ href, text }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  )
}

export default BlankLink
