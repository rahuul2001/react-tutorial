import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function Profile() {

  const { user } = useContext(UserContext);

  return (
    <div>Profile : {user ? user.username : "No user logged in"}
        <h1>More component</h1>
    </div>
  )
}

export default Profile