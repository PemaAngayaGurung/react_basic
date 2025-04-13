import React, {use, useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)
  
    if(!user) return <div><h1 className='text-center text-lg border py-2 mx-4 rounded-lg '>Please Log in</h1></div>

    return <div><h1 className='text-center text-lg bg-gray-200 mx-4 py-2 rounded-lg'>Welcome {user.username} </h1></div>
}

export default Profile
