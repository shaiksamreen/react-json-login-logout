import React from "react";
import { useEffect, useState } from 'react';
function Dashboard() {
    const [list, setList] = useState("");
    const [searchList, setSearchList] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/sites").then((data) =>{
        data.json().then((res) => {
            setList(res)
        })
        })
    },[])

    const search = (key) => {
        fetch("http://localhost:3000/sites?q=" + key).then((data) =>{
      data.json().then((res) => {
        setSearchList(res)
      })})
    }
    return(
        <div className="App">
        <header className="App-header">
            <h2>Sites</h2>
            <input type="text" placeholder='search a site' className="input-style" name='site' onChange={(e) => search(e.target.value)}/><br/>
            {
                searchList ? 
                (searchList.map((ob) => 
                <>
                    <div className='site-list'>
                    <div>{ob.name}</div>
                    </div>
                </>
                )) : 
                list ?
                list.map((item) => 
                <>
                    <div className='site-list'>
                    <div>{item.name}</div>
                    </div>
                </>): "please wait"
            }
        </header>
    </div>
    )
}
export default Dashboard