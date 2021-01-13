import React, { useContext } from 'react'
import { appContext } from '../../App'

import Song from '../Song'



const BottomDiv = () => {

    const { loading, sortResults, ascDesc, sortBy, songResults } = useContext(appContext);

    if (loading) {
        return (
            <div className="bottom-div">
                <h4>Loading...</h4>
            </div>
        )
    }
    return (
        <div className="bottom-div">
            {sortResults('name', ascDesc)}
            {sortBy === 'name' ? null : sortResults(sortBy, ascDesc)}
            {songResults.length ? (songResults.map(song => {
                return (<Song song={song} key={song.id} />)
            })) : <h3 className='center'>No Results :(</h3>
            }
        </div>
    )
}

export default BottomDiv
