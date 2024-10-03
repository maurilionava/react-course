import {useEffect, useState} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if(method === 'POST'){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }
    }
    
    //quando houver alteração nas variáveis URL, CALLFETCH há a atualização dos dados na página
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try{
            const rawResponse = await fetch(url)
            const jsonResponse = await rawResponse.json()

            setData(jsonResponse)
            } catch(error) {
                console.log(error.message)

                setError("Error ocurried while fetching data.")
            }
            setLoading(false)
        }

        fetchData()
    }, [url, callFetch])

    //refatorar post
    useEffect(()=>{
        const httpRequest = async () => {
            if(method === 'POST'){
                setLoading(true)

                let fetchOptions = [url, config]
    
                const rawResponse = await fetch(...fetchOptions)
                const jsonResponse = await rawResponse.json()
                
                //executa requisição de get
                setCallFetch(jsonResponse)

                setLoading(false)
            }
        }

        httpRequest()

    }, [config, method, url])

    return {data, httpConfig, loading, error}
}