import React, { useState, useEffect } from 'react'
import './App.css';

//import Custom Hook to fetch Song Data
import { useFetch } from './hooks/useFetch'

// Importing Components
import Settings from './components/layout/Settings'
import TopDiv from './components/layout/TopDiv'
import BottomDiv from './components/layout/BottomDiv'

export const appContext = React.createContext();

const App = () => {

  const { loading, songs, keys } = useFetch();

  const [songResults, setSongResults] = useState([]);

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
    if (songResults) {
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
    if (!loading) {
      setSongResults(songs);
    }

  }, [songs, loading]);


  // useEffect for updating songResults.
  // only woorks if is not loading.
  useEffect(() => {
    if (!loading) {
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
    }
  }, [loading, filterKey, filterLead, songs, searchVal])

  //  useEffect for checking size and updating isMobile

  useEffect(() => {
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  })

  return (
    <appContext.Provider value={{ loading, isMobile, showSettings, keys, setFilterKey, setFilterLead, setSortBy, setAscDesc, setShowSettings, sortBy, ascDesc, setSearchVal, sortResults, songResults }} >

      <div className="App">

        <Settings />

        <div className={isMobile ? "main-div-mobile" : "main-div"}>

          <TopDiv />
          <BottomDiv />

        </div>

      </div>

    </appContext.Provider>
  );
}


export default App;
