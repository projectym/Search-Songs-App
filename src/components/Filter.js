import React from 'react'


const Filter = (props) => {

    //console.log(props)
    const leaders = ["Keith", "Sis. Jackie", "Sis. Jones", "Tymbree"]

    const handleChange = (e) => {
        switch (e.target.id) {
            case "keys":
                props.setFilterKey(e.target.value);
                break;

            case "leads":
                props.setFilterLead(e.target.value);
                break;
            default:
        }

    }
    return (
        <div>
            <h3 className="center">Filter</h3>
            <label htmlFor="keys">By Key:</label>
            <select className='browser-default' name="keys" id="keys" onChange={handleChange}>
                <option value=''>All</option>
                {
                    props.keys.map((key) => {
                        return (
                            <option value={key} key={key}>{key}</option>
                        )
                    })
                }


            </select>

            <label htmlFor="leads">By Leaders:</label>
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
