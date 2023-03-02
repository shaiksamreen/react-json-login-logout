import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import './Bookmark.css'

function Bookmark (){
    const [title, setTitle] = useState("");
    const [list, setList] = useState([]);

    const addBookMark = () => {
        title ? (
        setList(prevList => [
            ...prevList,
            {
                title: title,
                id: uuidv4()
            }
        ])
        ) : alert('please enter bookmark title')
    }

    const deleteList = (id) => {
        setList(prevList => 
            prevList.filter(ob => ob.id !== id))
    }
    console.log(list,'--')
return(
    <div className="App">
            <div className="bookmark-app">
                <h2>Bookmark</h2>
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <input type="text" className="input-style" placeholder="enter bookmark title" onChange={(e)=>setTitle(e.target.value)}/>
                <button onClick={addBookMark} className="add-button">Add</button></div><br/><br/>
                <div >
                    {list ? list.map((ob)=>
                    <div className="bookmark-items">
                        {ob.title}
                        <button onClick={() => deleteList(ob.id)} className="del-button"> delete</button>
                    </div>
                        ):""}
                </div>
                
            </div>
    </div> 
)
}
export default Bookmark