
import React, {  useState } from 'react'



function AlbumCard(props) {

    const [title,setTitle] = useState("");

    function handleUpdate() {
        props.onUpdate({
           id :props.id,
           title:title
       });
    }
    function handleChange (e){
        let titleVal = e.target.value;
        setTitle(titleVal)
    }

   

        function handleDelete() {
            props.onDelete(props.id);
      }
    return (
      <div className="album">
        <div className="card" style={{ width: '18rem' }} >
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h5 className="card-title">{props.id}</h5>
        <input type="text" onChange={handleChange} placeholder='Add The Title '/>
        <button className="card-link" onClick={handleUpdate} >Update</button>
       
        <button className="card-link" onClick={handleDelete}>Delete</button>
        </div>
        </div>


      </div>
    );
  }

  
  export default AlbumCard;


