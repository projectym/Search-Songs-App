import React from 'react'

// this is a component to hold the info for each song
// props = id, name, leader, key, url, last_date_sung
// url is just end of url. must add "projectym.net/songs/"
// using spread operator to access props directly

const Song = (props) => {
    //console.log(props);
    const { name, leader, songKey, url } = props;
    const urlFull = "https://projectym.net/songs/" + url
    return (
        <div className='card'>
            <h5>{name}</h5>
            <p>Lead: {leader}  | Key: {songKey} |  <a href={urlFull}>Lyrics</a></p>
        </div>
    )
}

export default Song
