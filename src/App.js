import "./App.css";
import { Home } from "./Home";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PetsIcon from '@mui/icons-material/Pets';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom";
import { Switch, Route,  BrowserRouter as Router} from "react-router-dom";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { AddNewAnimel} from "./AddNewAnimel";
import { useState } from "react";
import Link from '@mui/material/Link';
import { SongDetail } from "./SongDetail";

function App() {

  const history=useHistory();
  const Data = [
    {
      name: "Lion",
      image: "https://animalrescueprofessionals.org/wp-content/uploads/2019/11/lion-africa-feature.jpg",
    },
    {
      name: "Tiger",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTuyPpr7JQoyWXYeZE5HyiFOIDcXv3ArNoqA&usqp=CAU",
    },
    {
      name: "Fox",
      image: "https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Mammals/mammal_red-fox-kit-nebraska_william-wiley_600x300.ashx",
    },
    {
      name: "Bear",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg"
    },
    {
      name: "Deer",
      image: "https://images.fineartamerica.com/images-medium-large/mule-deer-male-in-dry-grass-north-tim-fitzharris.jpg",
    },
    {
      name: "Horse",
      image: "https://www.thesprucepets.com/thmb/KYaXBSM013GnZ2jEZJnX4a9oIsU=/3865x2174/smart/filters:no_upscale()/horse-galloping-in-grass-688899769-587673275f9b584db3a44cdf.jpg"
    },
    {
      name: "Cheetah",
      image: "https://c.ndtvimg.com/2020-01/nfb3k5nc_african-cheetah-unsplash_625x300_28_January_20.jpg"
    },
    {
      name: "Elephant",
      image: "https://files.worldwildlife.org/wwfcmsprod/images/African_Elephant_Kenya_112367/story_full_width/qxyqxqjtu_WW187785.jpg"
    }
  ];

  const [list, setlist]=useState(Data);

  return(   
  <div className="App">
    <div className="home">
      <AppBar position="static" className="header" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <PetsIcon />
            AnimalWorld
          </Typography>
          <Link id="homebtn" href="../../">Home</Link>
        </Toolbar>
      </AppBar>
      
      <div className="box">
        {list.map(({ name, image, movie, singers, music, lyrics}, index) => (
          <Home
            id={index}
            name={name}
            image={image}
            list={list}
            setlist={setlist}
          />  ))}
      </div>
      <AddNewAnimel list={list} setlist={setlist} />
    </div>
  </div>
  );
};

export default App;


