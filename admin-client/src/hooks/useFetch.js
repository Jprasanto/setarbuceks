import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await fetch(url)
                const dataJson = await data.json()

                setItem(dataJson)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, []);
    return {
        loading,
        item
    }
}

export default useFetch