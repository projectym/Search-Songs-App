import React from 'react'

// this is a component to hold the info for each song
// props = id, name, leader, key, url, last_date_sung
// url is just end of url. must add "projectym.net/songs/"
// using spread operator to access props directly

const song = ({ ...props }) => {
    return (
        <div className='container'>
            <h3>Song Name</h3>
            <p>song leader</p>
            <p>song key</p>
            <a href="https://projectym.net/songs/"></a>
        </div>
    )
}

export default song
