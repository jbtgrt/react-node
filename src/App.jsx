import React, { useState, useEffect } from 'react';
import { fetchData, addData } from './api';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');

  // useEffect(() => {
  //   fetch('/api/data')
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);
  
  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // const handleAddData = () => {
  //   fetch('/api/data', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ data: newData }),
  //   })
  //     .then((res) => res.json())
  //     .then(() => {
  //       setNewData('');
  //       // Refresh data after storing
  //       fetch('/api/data')
  //         .then((res) => res.json())
  //         .then((data) => setData(data))
  //         .catch((error) => console.error('Error fetching data:', error));
  //     })
  //     .catch((error) => console.error('Error storing data:', error));
  // };

  const handleAddData = () => {
    addData({ name: newName, age: newAge })
      .then(() => fetchData())
      .then((data) => {
        setNewName('');
        setNewAge('');
        setData(data);
      })
      .catch((error) => console.error('Error storing data:', error));
  };

  return (
    <>
      <div className="App">
        <h1>React with Node Backend</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          &nbsp;
          <input
            type="number"
            placeholder="Age"
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
          />
          <button onClick={handleAddData}>Add Data</button>
        </div>
      </div>
      <div>
        <div className="container">
          <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name} {item.age}</li>
          ))}
        </ul>
        </div>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
