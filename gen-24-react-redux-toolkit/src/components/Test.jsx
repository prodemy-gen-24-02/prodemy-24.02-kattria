import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Test =()=>{
    const [data, setData] = useState([])
    const getData = () => {
        axios.get("https://dummyjson.com/products").then(res => setData(res.data.products));
    }
    useEffect(()=>{
        getData();
    },[])
    console.log(data);
    return(
        <div>
        {data?.map(({id, title, thumbnail})=>(
            <div key={id}>
                <img src={thumbnail} />
                <p>{title}</p>
            </div>
        ))}
        
        </div>
    )
}
export default Test;