import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

export function AddNewAnimel({list, setlist}) {

  const history= useHistory();

  const [Image, setimage] = useState("");
  const [Name, setname] = useState("");
  const [Movie, setmovie] = useState("");
  const [Music, setmusic] = useState("");
  const [Singers, setsingers] = useState("");
  const [Lyrics, setlyrics] = useState("");
  return (
<div className='addform'>
    <div className='inputdata'>
    <h1 className="title">Add The New Animal</h1>
      <div className='inputs'>
        <TextField id="outlined-basic" label="Image" variant="outlined"
          onChange={(event) => setimage(event.target.value)} /><br />
        <TextField id="outlined-basic" label="Animel" variant="outlined"
          onChange={(event) => setname(event.target.value)} /><br />

      </div>
      <div id='addbtn'>
        <Button className="addbtn" variant="contained" onClick={() => {
          const newAnimel= {
            name:Name,
            image:Image,
          };
          // setList([addmovie, ...list]);
          setlist([ ...list, newAnimel]);
          
        }}>Add</Button>
      </div>
     </div>
    {/* <Movieslist list={list}/> */}
</div>
  );
}