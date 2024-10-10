import React, { useContext } from 'react';
import { UserContext } from './UserContext';
const UserProfile = () => {
  const { username } = useContext(UserContext); 
  return (
    <div>
      <h2> el usuario</h2>
      <p>nombre: {username}</p> 
    </div>
  );
};
export default UserProfile;
