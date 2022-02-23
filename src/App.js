import "./App.css";
import { Home } from "./Home";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom";
import { Switch, Route,  BrowserRouter as Router} from "react-router-dom";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { AddNewSong } from "./AddNewSong";
import { useState } from "react";
import Link from '@mui/material/Link';

function App() {

  const history=useHistory();
  const Data = [
    {
      name: "  Aalaporan Thamizhan",
      image: "https://masstamilan.fm/i/wp/mersal-2017.webp",
      movie: "",
      singers: "Kailash Kher, D. Sathyaprakash, Deepak, Pooja AV",
      music: "Mersal",
      lyrics: "Vivek",
    },
    {
      name: " Yaaro En Nenjai",
      image: "https://masstamilan.fm/i/wp/kutty-2012.webp",
      movie: "Kutty ",
      singers: "Sagar, Sumangali",
      music: "Devi Sri Prasad",
      lyrics: "Veveka, Selvaragavan & Thamarai",
    },
    {
      name: "Vaadi Vaadi",
      image: "https://masstamilan.fm/i/wp/sachein-2005.webp",
      movie: "Sachein",
      singers: "Vijay, Vadivelu",
      music: "Devi Sri Prasad",
      lyrics: "Veveka, Selvaragavan & Thamarai",
    },
    {
      name: "Marappadhilai Nenje",
      image: "https://masstamilan.fm/i/wp/oh-my-kadavule-additional-songs-and-bgm-original-background-score-2020.webp",
      movie: "Oh My Kadavule",
      singers: "Leon James, Sudharshan Ashok",
      music: "Leon James",
      lyrics: "Ko Sesha",
    },
    {
      name: "Yean Ennai Pirindhaai",
      image: "https://direct.rhapsody.com/imageserver/images/alb.416475898/500x500.jpg",
      movie: "Adithya Varma",
      singers: "Sid Sriram",
      music: "Radhan",
      lyrics: "Vivek",
    },
    {
      name: "Arabic Kuthu",
      image: "https://pbs.twimg.com/media/FLiK_mAaUAMYItn.jpg",
      movie: "Beast",
      singers: "Anirudh Ravichander, Jonita Gandhi",
      music: "Anirudh Ravichander",
      lyrics: "Sivakarthikeyan",
    }
  ];

  const [list, setlist]=useState(Data);

  return(
  <div className="App">
    <div className="home">
      <AppBar position="static" className="header" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <QueueMusicIcon />
            SongsWala
          </Typography>
          <Link id="homebtn" href="../../">Home</Link>
        </Toolbar>
      </AppBar>
  
      <AddNewSong list={list} setlist={setlist} />
      
      <div className="box">
        {list.map(({ name, image, movie, singers, music, lyrics}, index) => (
          <Home
            id={index}
            name={name}
            image={image}
            movie={movie}
            singers={singers}
            music={music}
            lyrics={lyrics}
            list={list}
            setlist={setlist}
          />  ))}
      </div>
    </div>
  <Router>  
      <Switch>
        <Route path="/song/:id"><SongDetail /></Route>
      </Switch>
  </Router>
    
          
  </div>
  );
};

export default App;

function SongDetail(){
  const { id } = useParams();

  const history = useHistory();
   return(
     <div>
       Hiiidfdjadjad
      {/* <iframe 
      width="1350" 
      height="480" 
      src="https://www.youtube.com/embed/ExVaiQ1xV5g" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe> */}
     </div>
   )
}
