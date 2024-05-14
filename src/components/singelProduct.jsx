import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
// import { Product, ProductImage } from '../styles/product';

const Product=({product, matches}) => {
  return (
    <>
    {/* <ProductImage src={product.image} /> */}
    {/* <div className='product'>
      <div className='product-ditails'>
        <h2>{name}</h2>
        <p>ש"ח{price}</p>
        <button>הוסף לסל</button>
        </div>
    </div> */}
     <Grid item key={product.id} xs={4}>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={product.name}
        height="140"
        image={product.pathToImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          כאן לקבל את תיאור על המוצר ומחיר
          {" " +product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">+</Button>
        <span>0</span>
        <Button size="small">-</Button>
      </CardActions>
    </Card>
    </Grid>
    </>
  );
};

export default Product;
