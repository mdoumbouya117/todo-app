import React from 'react'

interface IProps {
    todo: string
}

export default function Todo({ todo } : IProps) {

  return (
    <li>{todo}</li>    
  )
}
