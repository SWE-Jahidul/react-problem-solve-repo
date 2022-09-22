const { useEffect, useState } = require("react")



const UseFatchData = (url,cb ) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')

    useEffect(() => {
        featchData()
    }, [])


    const featchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url)
            const result = await res.json();
            if(cb) {
                setData(cb(result));
            }
            else {
                setData(result);   
            }
            setError('');
            setLoading(false)
        }
        catch (e) {
            setError("server Error ")
            setLoading(false)
        }
    }

    return {
        data,
        loading,
        error
    }
}

export default UseFatchData
