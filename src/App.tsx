import React from 'react'

interface Props {
  message?: string
}

const App = ({message}: Props) => {
  return (
    <div>
      {message="this is a typescript comp"}
    </div>
  )
}

export default App

