import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product=({Product, matches}) => {
  return (
    <>
    {/* <div className='product'>
      <div className='product-ditails'>
        <h2>{name}</h2>
        <p>ש"ח{price}</p>
        <button>הוסף לסל</button>
        </div>
    </div> */}
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image="./logo192.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          כאן לקבל את תיאור על המוצר ומחיר
          {" " +price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">+</Button>
        <span>3</span>
        <Button size="small">-</Button>
      </CardActions>
    </Card>
    </>
  );
};

export default Product;
