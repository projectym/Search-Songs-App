import React, { useState, useEffect } from 'react'
import Song from './components/Song'
import './App.css';


const App = () => {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/projectym/Songs-Api/db')
      .then(response => response.json())
      .then(json => {
        const newSongs = json.Songs;
        console.log(newSongs);
        setSongs(newSongs);
      })
  }, []);

  return (
    <div className="App">
      <h1>Search Songs</h1>
      <p>A react app to search through songs using redux and custom api deployed by GitHub.</p>
      {songs.map(song => {
        return (
          <Song key={song.id} name={song.name} leader={song.leader} songKey={song.key} url={song.url} />
        )
      })}
    </div>
  );
}

export default App;
