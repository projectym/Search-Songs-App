import { useState } from 'react'


export const useFetch = () => {

    const [requestMade, setRequestMade] = useState(false)
    const [loading, setLoading] = useState(true);
    const [songs, setSongs] = useState([]);
    const [keys, setKeys] = useState([]);

    const getSongs = async () => {

        setRequestMade(true)
        //console.log("trying to recieve data")

        try {
            //console.log('fetchnig...')
            const response = await fetch('https://raw.githubusercontent.com/projectym/Songs-Api/main/db.json')
            const data = await response.json()

            // console.log(data);
            setSongs(data.Songs);
            setKeys(data.Keys);
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