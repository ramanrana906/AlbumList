
import React, { useState } from 'react'

const AddAlbum = (props) => {
    const [title,setTitle] =useState("");

    const handleChange = (e) =>{
        let titleVal = e.target.value
        setTitle(titleVal)
    }

    const submitAlbum = (event) =>{
        props.onAdd(title);
        event.preventDefault();
    }

  return (
    <div >
        <h1>Add New Album</h1>
        <form className='addAlbum'>
        <input type='text' name='title' placeholder="Title" onChange={handleChange}/>
        <button onClick={submitAlbum}>Add Album</button>
        </form>
    </div>
  )
}

export default AddAlbum