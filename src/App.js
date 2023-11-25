import React, { useState } from 'react'
import './App.css'

function App() {
  const [data,setData] = useState([])

  const [newName,setnewName] = useState()
  const [newEmail,setnewEmail] = useState()

  const AddData = () => {
    let newDatas = { name: newName.trim(), email: newEmail.trim() }
    setData([...data,newDatas])
    setnewName('')
    setnewEmail('')
  }

  return (
    <div>
      <center>
        <form>
          <table>
            <tr>
              <td><label>Name:</label></td>
              <td><input type='text' placeholder='Enter your name' value={newName} onChange={(e) => setnewName(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label>Email:</label></td>
              <td><input type='email' placeholder='Enter your email' value={newEmail} onChange={(e) => setnewEmail(e.target.value)} /></td>
            </tr>
          </table>
          <br/>
          <button type='button' onClick={AddData}>Submit</button>
        </form>
      </center>

      
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {data.map((item) => (
            <tr>
              <th>{item.name}</th>
              <th>{item.email}</th>
            </tr>
          ))
          }
        </table>
      
    </div>

  )
}

export default App