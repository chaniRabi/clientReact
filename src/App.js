import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import userSlice from './features/userSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Cart from './components/cart'
import Header from './components/header';
import Products from './components/products';
import productsSlice from './features/productsSlice';
import prductInCartSlice from './features/productInCartSlice';
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./styles/themeStyle";
import { useEffect } from "react";

const myStore = configureStore({
  reducer:{
    user: userSlice,
    product: productsSlice,
    cart: prductInCartSlice

  }
})

function App() {
  useEffect(() => {
    document.title = "שיינ'ס סטוק";
  }, []);

  return (
    <Provider store={myStore}>
       <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{background:'#fff'}}> 
      <Router>
       {/* <Header /> */}
        <Routes>
         <Route path="/signIn" element={<SignIn />} />
         <Route path="/signUp" element={<SignUp />} />
         <Route path="/" element={<HomePage />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products/>} />
            {/* <Route path="/Registration" element={<RegistrationForm/>} /> */}

          <Route />
        </Route>
      </Routes>
     </Router> 
      </Container>
     </ThemeProvider> 
    </Provider>
  );
}

export default App;
