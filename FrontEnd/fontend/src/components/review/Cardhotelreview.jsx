import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FormDialog from './dialogReview';

export default function CardReview({title,bed,checkin,checkout,img,id_hotel}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="h5" color="blue">
            Phòng Giường {bed}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Checkin: {checkin}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Checkout: {checkout}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Review
        </Button> */}
        <FormDialog id_hotel={id_hotel}/>
      </CardActions>
    </Card>
  );
}