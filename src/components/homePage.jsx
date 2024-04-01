import React, { useEffect, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
//import Product from './products';
import Header from './header';
import Nav from './nav';
//import Navigation from './navigation';
//import { GetProduct } from '../utils/product.js';
//import { setProducts } from '../features/productsSlice.js'
// import { addToCart,removFromCart } from '../features/cartSlice.js';}
import { Button, TextField, Grid, Typography, Container } from '@mui/material';
import { GetProduct } from '../utils/product';

function HomePage() {
    const dispatch = useDispatch();
    // שימוש במשתנה ששמרנו ברידקס - כשהיוזר מתחבר לאתר
    const logedUser = useSelector(state => state.user.logedUser);
    // שימוש בשתנה של מערך מוצרים ששמרנו בחלק של המוצרים בסלייס
    // const products = useSelector(state => state.product.products);
    //const cartItems = useSelector(state.cart.items);

    //const { cart, products } = useSelector((state) => state.products)

    useEffect(() => {
       // dispatch(GetProduct());
        // if(products.length === 0){
        //      GetProduct().then((data) => { //שליפת נתונים מהשרת
        //     //דחיפת הנתונים לריקדס
        //     dispatch(setProducts(data));
        // }).catch((error) => {
        //         console.error('Error fetching data:', error);
        //     });
        // }
    }, []);

    // const handleAddToCart = (product) => {
    //     dispatch(addToCart(product));
    // };
    // const handelRemoveFromCart = (product) => {
    //     dispatch(handelRemoveFromCart(product));
    // };

    return (
        <div className='home-page'>
            <Header />
            <Container maxWidth="sm">
                <Typography variant='h4' align='center' style={{ marginTop: 50 }}>
                    ברוכים הבאים לשיינ'ס סטוק
                    {/* הצגה של השם שמחובר עכשיו לאתר - מהמשתנה שקיבלנו מהרידקס */}
                    {logedUser != null ? <h3>hello {logedUser.name}</h3> : null}
                    <div >
                        <Nav />
                        {/* <navigation/> */}
                    </div>
                    {/* <div>
                      {products.map((product) => (
                         <Product key={product.id} name={product.name} price={product.prise} />
                     ))}
                    </div> */}
                    <div>
                        {/* תגית ששמים אותה כשרוצים לעשות ניווט מקונן - */}
                        {/* הכוונה שרוצים להשאיר את כל הלינקים כתובים למעלה כמו ניווט ואז לשתול את התגית שמתאימה לניווט במקום שכתוב את התגית הזאת: */}
                        <Outlet></Outlet>
                    </div>
                </Typography>
            </Container>
        </div>
    );

};

export default HomePage;