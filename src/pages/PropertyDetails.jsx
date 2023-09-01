import React from 'react'
import { useParams } from 'react-router-dom'

function PropertyDetails() {

    const {id} = useParams()

  return (
    <div>PropertyDetails: {id}</div>
  )
}

export default PropertyDetails