import React from 'react'

const Text = ({ params }: { params: { id: number } }) => {
  return (
    <div>{params.id}</div>
  )
}

export default Text