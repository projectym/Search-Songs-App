import { useState, useEffect } from 'react'

export const useFetch = () => {

    const [loading, setLoading] = useState(true);
    const [songs, setSongs] = useState([]);
    const [keys, setKeys] = useState([]);


    const getSongs = async () => {
        const response = await fetch('https://my-json-server.typicode.com/projectym/Songs-Api/db');
        const data = await response.json();
        console.log(data)

        setSongs(data.Songs);
        setKeys(data.Keys);
        setLoading(false);
        console.log(loading, songs, keys)
    }

    useEffect(() => {
        getSongs()
    })

    return { loading, songs, keys }

}