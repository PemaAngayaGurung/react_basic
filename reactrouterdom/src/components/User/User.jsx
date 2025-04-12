import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} = useParams()
  return (
    <div>
      <h1 className='text-center bg-green-700 m-3 p-4 rounded-lg'>This is user : {userid}</h1>
    </div>
  )
}

export default User
