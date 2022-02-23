import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";


export function Home({ name, image, movie, id, list, setlist }) {
  const history=useHistory();
  console.log(history);
  return (
    <div className="card" onClick={()=> history.push(`/song/${id}`)}>
      <Card sx={{ maxWidth: 345 }}   >
        <CardMedia
         
          component="img"
          className="img"
          height="250"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie}{id}
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
  );
}


