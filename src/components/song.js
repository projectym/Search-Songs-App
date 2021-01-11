import React from 'react'

// this is a component to hold the info for each song
// props = id, name, leader, key, url, last_date_sung
// url is just end of url. must add "projectym.net/songs/"
// using spread operator to access props directly

const Song = (props) => {
    //console.log(props);
    const { name, lead, key, url, last_date_sung } = props.song;
    const urlFull = "https://projectym.net/songs/" + url
    const date = last_date_sung ? new Date(last_date_sung + 'T12:00:00Z').toDateString().slice(3) : '';
    return (
        <div className='song-card'>
            <h5>{name}</h5>
            <p>Last Sung: {date}</p>
            <p>{lead ? `Lead: ${lead} | ` : ""} Key: {key} |  <a href={urlFull}>Lyrics</a></p>
        </div>
    )
}

export default Song
