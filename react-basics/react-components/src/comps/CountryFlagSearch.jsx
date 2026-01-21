import React from 'react'
import { useState,useEffect } from 'react';
function CountryFlagSearch() {
    const[cdata,setCdata]=useState([]);
    const[loaddata,setLoaddata]=useState([]);

    const [input,setInput]=useState("");
    useEffect(()=>{
        const filterdata=cdata.filter((items)=>{
            return items.name.toLowerCase().includes(input.toLowerCase());
        });
        setLoaddata(filterdata)
    },[input])
    useEffect(()=>{
        const fetchdata= async ()=>{
            try{
                const res= await fetch("https://xcountries-backend.labs.crio.do/all");
                const data= await res.json();
                setCdata(data);
                setLoaddata(data);
                console.log(data)
            }
            catch(err){
                console.error(err)
            }
        }
        fetchdata();
    },[])

  return (

    <div>
        <h1>CountryFlagSearch</h1>
        <input type="text"  value={input} placeholder='search here' onChange={(e)=>setInput(e.target.value)}/>
        <div style={{display:'grid',gridTemplateColumns:"repeat(6,1fr)",gap:"10px"}}>
            {loaddata.map((items)=>(
                <div key={items.id} style={{border:"1px solid black"}}>
                    <h2>{items.name}</h2>
                    <img src={items.flag} height={60} alt={items.name} />
                </div>
            ))}

        </div>


    </div>

  )
}

export default CountryFlagSearch