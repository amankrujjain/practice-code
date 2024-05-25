import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetch = async ()=>{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            try {
                console.log(response)
                setData(response.data);
            } catch (error) {
                console.log(error);
            };
        };
        fetch()
    },[])
  return (
    <div>
        {
            data && (
                <div>
                    <p> {data.id}</p>
                <p> {data.title}</p>
                <p> {data.body}</p>
                    </div>

            )
        }
    </div>
  )
}

export default Api