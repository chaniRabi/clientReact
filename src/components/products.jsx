import React, {useEffect, useState} from 'react';//שימוש בהוק אפקט יביא נתוני מוצר כאשר נטען הרכיב
import { GetProduct } from '../utils/product';//באמצעות הפונקציה יביא רשימה של מוצרים
import Product from './singelProduct';
import { setProducts } from '../features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";


const Products = () =>{
    // const [products, setProducts] = useState([]);
     // שימוש בשתנה של מערך מוצרים ששמרנו בחלק של המוצרים בסלייס
     const products = useSelector(state => state.product.products);
     const dispatch = useDispatch();

    useEffect(()=>{
        const fetchProducts = async () => {
            const data = await GetProduct();
            // setProducts(data);
             //דחיפת הנתונים לריקדס
            dispatch(setProducts(data));
        };

        if(products.length === 0){
            //שליפת נתונים מהשרת
             fetchProducts();
        }
    }, []);

    //טיפול בתרחיש שבו המוצרים עדיין נשלפים מה-API
    //מאפשר להציג הודעת טעינה לפני שליפת המוצרים ועיבודם במסך
    if (products.length === 0){
        // return <div>טוען מוצרים</div>; 
        return(
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
            <Typography variant="h4">טוען מוצרים</Typography>
            </Box>
        );
    }

    // const theme = useTheme();
    // const matches =
    //     useMediaQuery(theme.breakpoints.down('md'));

    //מחזיר את רשימת המוצרים
    const renderProducts = products.map(product => (
       <Grid item key={product.id} display="flex" flexDirection={"column"}
       alignItems="center">
       </Grid>
    ))
     
    return(
        <>
        {/* // <Container>
        //     <Grid
        //     Container
        //     justifyContent={"center"}
        //     sx={{margin: '20px 4px 10px 4px'}}
        //     >
        //         {renderProducts}
        //     </Grid>
        // </Container> */}
        <Box display="flex" justifyContent="center" sx={{ p: 7 }}>
                <Typography variant="h4">המוצרים שלנו:</Typography>
              </Box>
        <Box sx={{ flexGrow: 1 }}>
        <Grid
            container
            spacing={2}
            // sx={{margin: '20px 4px 10px 4px'}}
            >
                 {products.map((product)=>(
              <Product key={product.id} product={product}/>
            ))}
            </Grid>
        </Box>

        {/* // <div className='products'>
        //     {products.map((product)=>(
        //       <Product key={product.id} product={product}/>
        //     ))}
        // </div> */}
        </>
    );
};

export default Products;