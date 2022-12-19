
import React, { useEffect, useState } from 'react'
import AddAlbum from './addAlbum';
import AlbumCard from './AlbumCard';
import './App.css';

function App() {
 
    const [albums,setAlbums] =useState([]);
   
    //get Request to get all albums
    const getAlbums = async () =>{
       fetch('https://jsonplaceholder.typicode.com/albums')
           .then((response) => response.json())
           .then((data) => setAlbums(data));
    }
    useEffect(() => {
       getAlbums();
     },[]);

    

// put request to update a particular album
const updateAlbum = (data) => {

  
fetch(`https://jsonplaceholder.typicode.com/albums/${data.id}`, {
  method: 'PUT',
  body: JSON.stringify({
    id: data.id,
    title: data.title,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => alert(`The Album Has been Updated New Title is ${data.title} for the id ${data.id}`));

}

// Delete An Album
const deleteAlbum =(id)=>{
  fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
  method: 'DELETE',
})
.then((response) => {
  console.log("response",response)
  if(response.status === 200){
    alert("Album Succesfully Deleted");
  }
})
}
//ADd new Album
const addAlbum = (newAlbum) => {
 
  fetch(' https://jsonplaceholder.typicode.com/albums', {
  method: 'POST',
  body: JSON.stringify({
    title: newAlbum,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => alert(`The Album Has been Added New Title is ${data.title} With the id ${data.id}`));
}


     
  return (
    
    <div className="App">

    <h1>Album List</h1>
    <div className='albumContainer'>
    {
        albums.map( (album) =>{
                return (
                  <AlbumCard
                     key={album.id}
                     id={album.id}
                   title={album.title}
                    onUpdate={updateAlbum}
                    onDelete={deleteAlbum}
                  />
                    
                )
        })
    }
    </div>
    <div className='add'>
    <AddAlbum onAdd={addAlbum}/>
    </div>
   

</div>

  )}

export default App;
