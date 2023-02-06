import React, { useState, useEffect } from "react"
import axios from "axios"
import './App.css';

function App() {
  const [users, setUser] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchData = async() => {
      try {
        const fetchedUsers = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUser(fetchedUsers.data)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }

    fetchData();
  }, [])

  console.log(users)

  return (
    <div className="App">
      {loading? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="users">
          {users.map((user) => (
            <div className="user-card" key={user.id}>{user.name}</div>
          ))}
        </div>
      )}
      
    </div>
  );
}

export default App;