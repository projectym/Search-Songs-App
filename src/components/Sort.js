import React from 'react'

const Sort = (props) => {

    const handleClick = (e) => {

        if (e.target.name === 'sortBy') {

            props.setSortBy(e.target.value)
        }

        if (e.target.name === 'ascDesc') {
            props.setAscDesc(e.target.value)
        }
    }

    return (
        <div>
            <h4 className="center">Sort by</h4>
            <div className="flex-row asc-desc">
                <div className="radio-button width-30">
                    <label htmlFor="title">Asc</label>
                    <input type="radio" id="asc" name="ascDesc" value="asc" onClick={handleClick} defaultChecked />
                </div>

                <div className="radio-button width-30">
                    <label htmlFor="title">Desc</label>
                    <input type="radio" id="desc" name="ascDesc" value="desc" onClick={handleClick} />
                </div>
            </div>

            <div className="radio-button">
                <label htmlFor="title">Title</label>
                <input type="radio" id="title" name="sortBy" value="name" onClick={handleClick} defaultChecked />
            </div>

            <div className="radio-button">
                <label htmlFor="date">Last Sung</label>
                <input type="radio" id="date" name="sortBy" value="date" onClick={handleClick} />
            </div>

            <div className="radio-button">
                <label htmlFor="key">Key</label>
                <input type="radio" id="key" name="sortBy" value="key" onClick={handleClick} />
            </div>
        </div>
    )
}

export default Sort
