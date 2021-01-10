import React, { useContext } from 'react'
import { appContext } from '../../App'
import Search from '../../components/Search'


const TopDiv = () => {

    const { setSearchVal, isMobile, showSettings, setShowSettings } = useContext(appContext);


    return (
        <div className="top-div">
            <h1>Search Songs</h1>
            <p style="padding: 0 10px;" >A React app made to search through, filter, and sort a list of songs. Deployed with GitHub.</p>
            <Search setSearchVal={setSearchVal} showSettings={showSettings} setShowSettings={setShowSettings} isMobile={isMobile} />
        </div>
    )
}

export default TopDiv
