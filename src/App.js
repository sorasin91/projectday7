import React, { useState } from 'react'
import './App.css'

function App() {
  // State to hold the data
  const [data, setData] = useState([])

  // State for input fields
  const [newName, setnewName] = useState()
  const [newEmail, setnewEmail] = useState()

  // Function to validate email using Regex
  const isEmailValid = (email) => {
    // Regex pattern for basic email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  // Function to add data to the list
  const AddData = () => {
    // Validate the email before adding data
    if (!isEmailValid(newEmail)) {
      alert('Please enter a valid email address');
      return;
    }
    // Creating new data object and updating state
    let newDatas = { name: newName.trim(), email: newEmail.trim() }
    setData([...data, newDatas])

    // Clearing input fields after submit
    setnewName('')
    setnewEmail('')
  }

  return (
    <div>
      <center>
        <form>
          <table>
            {/* Input fields for name and email */}
            <tr>
              <td><label>Name:</label></td>
              <td><input type='text' placeholder='Enter your name' value={newName} onChange={(e) => setnewName(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label>Email:</label></td>
              <td><input type='email' placeholder='Enter your email' value={newEmail} onChange={(e) => setnewEmail(e.target.value)} /></td>
            </tr>
          </table>
          <br />
          {/* Button to submit the form */}
          <button type='button' onClick={AddData}>Submit</button>
        </form>
      </center>

      {/* Table to display the entered data */}
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {/* Mapping and displaying the data */}
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