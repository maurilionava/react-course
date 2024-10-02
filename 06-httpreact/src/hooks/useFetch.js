import {useEffect, useState} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
            const rawResponse = await fetch(url)
            const jsonResponse = await rawResponse.json()

            setData(jsonResponse)
        }

        fetchData()
    }, [url])

    return {data}
}