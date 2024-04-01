import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const {setProducts} = productsSlice.actions;

export default productsSlice.reducer;