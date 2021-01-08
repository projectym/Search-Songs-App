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
            {songResults.map(song => {
                return (<Song song={song} key={song.id} />)
            })
            }
        </div>
    )
}

export default BottomDiv
