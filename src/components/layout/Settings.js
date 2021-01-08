import React, { useContext } from 'react'
import { appContext } from '../../App'

//import components
import Filter from '../../components/Filter'
import Sort from '../../components/Sort'

const Settings = () => {

    const { isMobile, showSettings, setSortBy, setAscDesc, setShowSettings } = useContext(appContext);


    return (
        <div className={isMobile ? "settings-container-mobile" : "settings-container"} hidden={!showSettings}>
            <div className="settings-div">
                <Filter />
                <Sort setSortBy={setSortBy} setAscDesc={setAscDesc} />
                <button onClick={() => setShowSettings(false)} hidden={!isMobile}>Close</button>
            </div>

        </div>
    )
}

export default Settings
