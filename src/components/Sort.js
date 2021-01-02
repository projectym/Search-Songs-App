import React from 'react'

const Sort = (props) => {

    const handleClick = (e) => {

        props.setSortBy(e.target.value)
    }

    return (
        <div>
            <h3 className="center">Sort</h3>
            <div className="radio-button">
                <label className='browser-default' htmlFor="title">By Title</label>
                <input className='browser-default' type="radio" id="title" name="sortBy" value="name" onClick={handleClick} defaultChecked />
            </div>

            <div className="radio-button">
                <label htmlFor="date">By Date last sung</label>
                <input className='browser-default' type="radio" id="date" name="sortBy" value="date" onClick={handleClick} />
            </div>

            <div className="radio-button">
                <label htmlFor="key">By Key</label>
                <input className='browser-default' type="radio" id="key" name="sortBy" value="key" onClick={handleClick} />
            </div>
        </div>
    )
}

export default Sort
