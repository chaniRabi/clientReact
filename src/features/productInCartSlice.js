import { createSlice } from "@reduxjs/toolkit";
import { GetProduct } from '../utils/product.js';
import {setLogedProduct} from './productSlice.js'

//להגדיר לסלייס את הסטייט ההתחלתי שלו
// יצירה של משתנה סטייט עבור החלק הזה של הרדיוסר
const initialValue = {
    logedProductInCart: null,
}

//Redux המפשטת את תהליך יצירת פרוסת-חלק מ  @reduxjs/toolkit היא פונקציה מספריית createSlice 
//store פרוסה -חלק מרידקס מייצגת חלק ממצב היישום הכולל וכולל את  הרדיוסר והפעולות הנחוצות לעדכון החלק הזה של משתנה הסטייט של ה
const productInCartSlice = createSlice({
    name: "productInCart",//מגדיר את השם עבור החלק הזה של הרידקס
    initialState: initialValue,//הגדרת אובייקט סטייט התחלתי עבור החלק הזה
    // הגדרה של הפעולות ברדיוסר - זה בעצם הפעולות עבור החלק הזה של המשתנה סטייט
    //בתוך האובייקט הזה נכתוב את הפונקציות שאחראיות על שינוי המשתנים שמוגדרים באובייקט סטייט
    reducers:{
        SET_LOGGED_PRODUCTINCART: (state, action) => {
            state.logedProductInCart = action.payload;
          },
    }
})

// ייצוא של הפונקציות - הפעולות שכתבנו שמשנים את המשתנים שבמשתנה סטייט
// וכך נוכל לייבא את זה בקומפוננטה ולהתשמש בפונקציה
export const { SET_LOGGED_PRODUCTINCART } = productInCartSlice.actions;
//שיצרנו store והגדרה שלו במשתנה  index.jsוייבוא שלו ב reducer ייצוא של ה
export default productInCartSlice.reducer;

