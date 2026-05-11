import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await axios.get('/api/users');
    setUsers(response.data.data)
  }

  useEffect(()=>{
    getUsers();
  },[])
  return (
    <>
    {users.map((user,idx)=>(
      <div key={idx}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    ))}
    </>
  )
}

export default App