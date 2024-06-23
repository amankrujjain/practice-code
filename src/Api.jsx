// https://jsonplaceholder.typicode.com/posts/1
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Api = () => {
    const [data, setData] = useState('');

    useEffect(() => {

       let fetchData = async() =>{
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
            if(res.data){
                setData(res.data)
            }else{
                alert("This is error")
            }
        } catch (error) {
            console.log(error)
        }
       };
       fetchData()
    }, []);

    return (
        <div>
            {
                data && (
                   <>
                    <h1>{data.id}</h1>
                    <h4>{data.title}</h4>
                    <p>{data.body}</p>
                   </>
                )
            }
        </div>
    )
};

export default Api