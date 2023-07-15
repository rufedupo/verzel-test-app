import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const CarCard = ({name,brand, model, age, color, km, photoUrl, value}) => (
  <Card sx={{
    marginTop: '1em',
    backgroundColor: '#f1f1f1'
  }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={photoUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="caption" component="div">
          {brand} | {model}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          {age} • {color} • {km} km
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{
          color: '#b92f35'
        }}>
          R$ {value}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)

export default CarCard;