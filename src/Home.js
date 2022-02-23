import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { Switch, Route,  BrowserRouter as Router} from "react-router-dom";
import { SongDetail } from "./SongDetail";


export function Home({ name, image, id, list, setlist }) {
  const history=useHistory();
  return (
    <>
    <div className="card" >
      <Card sx={{ maxWidth: 345 }}   >
        <CardMedia
          onClick={()=> history.push(`/song/${id}`)}
          component="img"
          className="img"
          height="250"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" id="name">
            {name}
          </Typography>
          <div className="dltbtn">
          <Button 
          variant="contained"
          color="error"
          onClick={()=> {
            const copyList = [...list];
            copyList.splice(id, 1);
            setlist(copyList);
            console.log(copyList);
          }}
          >Delete</Button>
          </div>
          
        </CardContent>
      </Card>
    </div>
    </>
  );
}


