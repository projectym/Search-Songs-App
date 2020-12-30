import React from 'react'
import Song from './components/Song'
import './App.css';



const App = () => {

  fetch('https://my-json-server.typicode.com/projectym/Songs-Api/db')
    .then(response => response.json())
    .then(json => {
      console.log(json);
    })

  return (
    <div className="App">
      <h1>Search Songs</h1>
      <p>A react app to search through songs using redux and custom api deployed by GitHub.</p>
      <Song />
      <Song />
      <Song />
    </div>
  );
}

export default App;
