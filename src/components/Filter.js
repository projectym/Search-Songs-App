import React, { useContext } from 'react'
import { appContext } from '../App'


const Filter = () => {

    const { loading, keys, setFilterKey, setFilterLead } = useContext(appContext);

    const leaders = ["Keith", "Sis. Jackie", "Sis. Jones", "Tymbree"]

    const handleChange = (e) => {
        switch (e.target.id) {
            case "keys":
                setFilterKey(e.target.value);
                break;

            case "leads":
                setFilterLead(e.target.value);
                break;
            default:
        }

    }

    const keyResults = loading ? [] : (
        keys.map((key) => {
            return (<option value={key} key={key}>{key}</option>)
        })
    )


    return (
        <div>
            <h4 className="center">Filter by</h4>
            <label htmlFor="keys">Key:</label>
            <select className='browser-default' name="keys" id="keys" onChange={handleChange}>
                <option value=''>All</option>
                {keyResults}
            </select>

            <label htmlFor="leads">Leaders:</label>
            <select className='browser-default' name="leads" id="leads" onChange={handleChange}>
                <option value=''>All</option>
                {
                    leaders.map((lead) => {
                        return (
                            <option value={lead} key={lead}>{lead}</option>
                        )
                    })
                }

            </select>

        </div>
    )
}

export default Filter
