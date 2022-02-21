import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

export function AddNewSong({list, setlist}) {

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
    <h1 className="title">Add The New Song</h1>
      <div className='inputs'>
        <TextField id="outlined-basic" label="Poster" variant="outlined"
          onChange={(event) => setimage(event.target.value)} /><br />
        <TextField id="outlined-basic" label="Song" variant="outlined"
          onChange={(event) => setname(event.target.value)} /><br />
        <TextField id="outlined-basic" label="Movie" variant="outlined"
          onChange={(event) => setmovie(event.target.value)} /><br />
        <TextField id="outlined-basic" label="music"
          onChange={(event) => setmusic(event.target.value)} variant="outlined" /><br />
        <TextField id="outlined-basic" label='Singers'
          onChange={(event) => setsingers(event.target.value)} variant="outlined" />  <br />
        <TextField id="outlined-basic" label='Lyrics writer'
          onChange={(event) => setlyrics(event.target.value)} variant="outlined" /><br />
       

      </div>
      <div id='addbtn'>
        <Button className="addbtn" variant="contained" onClick={() => {
          const newSong= {
            name:Name,
            image:Image,
            movie:Movie,
            singers:Singers,
            music:Music,
            lyrics:Lyrics
          };
          // setList([addmovie, ...list]);
          setlist([newSong, ...list]);
          
        }}>Add the Movie</Button>
      </div>
     </div>
    {/* <Movieslist list={list}/> */}
</div>
  );
}