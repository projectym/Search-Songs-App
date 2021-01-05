import React, { useState, useEffect } from 'react'
import './App.css';

// Importing Components
import Song from './components/Song'
import Filter from './components/Filter'
import Sort from './components/Sort'
import Search from './components/Search'


const App = () => {

  const [songs, setSongs] = useState([]);
  const [songResults, setSongResults] = useState([]);
  const [keys, setKeys] = useState([]);

  const [filterKey, setFilterKey] = useState('');
  const [filterLead, setFilterLead] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [ascDesc, setAscDesc] = useState('asc')
  const [searchVal, setSearchVal] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [showSettings, setShowSettings] = useState(true);

  const sortResults = (sortSongsBy, ascDesc) => {

    // Find what to sort by
    // set string to uppercase
    // compare strings and return value

    songResults.sort((song1, song2) => {

      let value1 = 1
      let value2 = -1

      if (ascDesc === 'desc') {
        value1 = -1;
        value2 = 1
      }


      let var1 = '';
      let var2 = '';

      if (sortSongsBy === 'key') {
        var1 = song1.key.toUpperCase();
        var2 = song2.key.toUpperCase();
      } else if (sortSongsBy === 'date') {
        var1 = song1.last_date_sung.toUpperCase();
        var2 = song2.last_date_sung.toUpperCase();
      } else {
        var1 = song1.name.toUpperCase();
        var2 = song2.name.toUpperCase();
      }

      if (var1 < var2) {
        return value2
      }
      if (var1 > var2) {
        return value1
      }

      return 0
    })
  }

  const checkSize = () => {
    const width = window.innerWidth
    if (width > 1000 && isMobile) {
      setIsMobile(false);
      setShowSettings(true);
    }
    else if (width <= 1000 && !isMobile) {
      setIsMobile(true);
      setShowSettings(false);
    }
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

    if (searchVal !== '') {

      const searchArr = searchVal.toUpperCase().split(' ');
      const index = searchArr.indexOf('');

      if (index > -1) {
        searchArr.splice(index, 1);
      }

      for (let i = 0; i < searchArr.length; i++) {

        if (filteredSongs.length > 0) {
          filteredSongs = filteredSongs.filter(song => {

            const { name, lead, key } = song;

            if (name.toUpperCase().includes(searchArr[i])) {
              return true
            }
            else if (lead.toUpperCase().includes(searchArr[i])) {
              return true
            }
            else if (key.toUpperCase().includes(searchArr[i])) {
              return true
            }
            return false;
          })
        }
      }
    }

    setSongResults(filteredSongs);

  }, [filterKey, filterLead, songs, searchVal])

  useEffect(() => {
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  })

  return (

    <div className="App">

      <div className={isMobile ? "settings-container-mobile" : "settings-container"} hidden={!showSettings}>
        <div className="settings-div">
          <Filter keys={keys} setFilterKey={setFilterKey} setFilterLead={setFilterLead} />
          <Sort setSortBy={setSortBy} setAscDesc={setAscDesc} />
          <button onClick={() => setShowSettings(false)} hidden={!isMobile}>Close</button>
        </div>

      </div>

      <div className="main-div">
        <div className="top-div">
          <h1>Search Songs</h1>
          <p>A react app to search through songs using redux and custom api deployed by GitHub.</p>
          <Search setSearchVal={setSearchVal} showSettings={showSettings} setShowSettings={setShowSettings} isMobile={isMobile} />
        </div>

        <div className="bottom-div">
          {sortResults('name', ascDesc)}
          {sortBy === 'name' ? null : sortResults(sortBy, ascDesc)}{
            songResults.map(song => {
              return (
                <Song song={song} key={song.id} />
              )
            })}
        </div>
      </div>




    </div>
  );
}


export default App;
