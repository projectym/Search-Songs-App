import React, { useState, useEffect } from 'react'

const Search = (props) => {

    const [search, setSearch] = useState('');

    useEffect(() => {
        props.setSearchVal(search);
    }, [props, search])


    return (
        <div className="search-component">
            <div className='search-bar'>
                <input className='browser-default' type="text" name='search' placeholder="Search"
                    value={search} onChange={(e) => { setSearch(e.target.value) }} />
            </div>
            <button className='clear-search' onClick={() => setSearch('')}>Clear</button>

            <button className='settings-button' onClick={() => props.setShowSettings(!props.showSettings)} hidden={!props.isMobile}>Settings</button>

        </div>
    )
}

export default Search
