import React, { useState, useEffect } from 'react'
import './App.css';

// Importing Components
import Song from './components/Song'
import Filter from './components/Filter'
import Sort from './components/Sort'


const App = () => {

  const [songs, setSongs] = useState([]);
  const [songResults, setSongResults] = useState([]);
  const [keys, setKeys] = useState([]);

  const [filterKey, setFilterKey] = useState('');
  const [filterLead, setFilterLead] = useState('');
  const [sortBy, setSortBy] = useState('');

  const sortResults = () => {

    // Find what to sort by
    // set string to uppercase
    // compare strings and return value

    songResults.sort((song1, song2) => {
      let var1 = '';
      let var2 = '';

      if (sortBy === 'key') {
        var1 = song1.key.toUpperCase();
        var2 = song2.key.toUpperCase();
      } else if (sortBy === 'date') {
        var1 = song1.last_date_sung.toUpperCase();
        var2 = song2.last_date_sung.toUpperCase();
      } else {
        var1 = song1.name.toUpperCase();
        var2 = song2.name.toUpperCase();
      }

      if (var1 < var2) {
        return -1
      }
      if (var1 > var2) {
        return 1
      }

      return 0
    })
  }

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/projectym/Songs-Api/db')
      .then(response => response.json())
      .then(json => {
        setKeys(json.Keys)
        setSongs(json.Songs);
        setSongResults(json.Songs);
      })

  }, []);

  useEffect(() => {
    let filteredSongs = songs.filter((song) => {
      if (filterKey !== '' && filterLead !== '') {
        return song.key === filterKey && song.lead.includes(filterLead)
      }
      else if (filterKey !== '') {
        return song.key === filterKey
      }
      else if (filterLead !== '') {
        return song.lead.includes(filterLead)
      }
      return true
    });


    setSongResults(filteredSongs);
  }, [filterKey, filterLead, songs])



  return (

    <div className="App">

      <div className="settings-div">
        <Filter keys={keys} setFilterKey={setFilterKey} setFilterLead={setFilterLead} />
        <Sort setSortBy={setSortBy} />

      </div>

      <div className="main-div">
        <div className="top-div">
          <h1>Search Songs</h1>
          <p>A react app to search through songs using redux and custom api deployed by GitHub.</p>
        </div>

        <div className="bottom-div">
          {sortResults()}{
            songResults.map(song => {
              return (
                <Song key={song.id} name={song.name} leader={song.lead} songKey={song.key} url={song.url} />
              )
            })}
        </div>
      </div>




    </div>
  );
}


export default App;
