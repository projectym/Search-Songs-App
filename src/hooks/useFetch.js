import { useState } from 'react'

export const useFetch = () => {

    const [requestMade, setRequestMade] = useState(false)
    const [loading, setLoading] = useState(true);
    const [songs, setSongs] = useState([]);
    const [keys, setKeys] = useState([]);


    const getSongs = async () => {

        setRequestMade(true)
        console.log("trying to recieve data")

        try {
            const response = await fetch('https://my-json-server.typicode.com/projectym/Songs-Api/db')
            const data = await response.json()

            setSongs(data.Songs);
            setKeys(data.Keys);
            console.log(loading, songs, keys)
            setLoading(false);

        }
        catch (err) {
            console.log(err)
        }

    }

    if (!requestMade) {
        getSongs()
    }


    return { loading, songs, keys }

}