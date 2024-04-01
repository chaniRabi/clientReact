import { createSlice } from "@reduxjs/toolkit";

export const createSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
    },
    reducer:{
        addToCart: (stat, action) =>{
            stat.items.push(action.payload);
        },
        remoneFromCart:(stat, action) =>{
            stat.items = stat.items.filter(item=>item.id !== action.payload.id);
        },
        incrementQuantity: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.id);
            product.quantity++;
          },
          decrementQuantity: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product.quantity > 1) {
              product.quantity--;
            }
        },
    },
});

export const {addToCart, remoneFromCart, incrementQuantity, decrementQuantity} = cartSlice.action;

export default cartSlice.reducer;