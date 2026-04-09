import React, {useContext} from 'react'
import userContext from '../context/userContext'

function Profile() {
    const {user} = useContext(userContext)

    if (!user) return <div>Please login to view your profile.</div>

    return <h2>Welcome {user.username}</h2>
  
}

export default Profile