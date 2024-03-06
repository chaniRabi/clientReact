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
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Products from './components/products';
import productSlice from './features/productSlice';
import prductInCartSlice from './features/productInCartSlice';

const myStore = configureStore({
  reducer:{
    user: userSlice,
    product: productSlice,
    cart: prductInCartSlice

  }
})

function App() {

  return (
    <Provider store={myStore}>
      <Container>
      <Router>
       {/* <Header /> */}
        <Routes>
         <Route path="/signIn" element={<SignIn />} />
         <Route path="/signUp" element={<SignUp />} />
         <Route path="/" element={<HomePage />}>
         <Route path="/cart" element={<Cart />} />
         <Route path="/products" element={<Products/>} />
          <Route />
        </Route>
      </Routes>
     </Router> 
     </Container>
    </Provider>
  );
}

export default App;
