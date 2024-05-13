
import React, {useEffect, useState} from 'react';//שימוש בהוק אפקט יביא נתוני מוצר כאשר נטען הרכיב
import { GetCategories } from '../utils/categoryAPI';//באמצעות הפונקציה יביא רשימה של מוצרים
import { setCategries } from '../features/categoriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Button } from '@mui/material';//-List מייצג את הרשימה עצמה, -ListItem מייצג כל פריט ברשימה
import { Link } from 'react-router-dom';


const Categories = () =>{
     const categories = useSelector(state => state.category.categories);
     const dispatch = useDispatch();

    useEffect(()=>{
        const fetchCategories = async () => {
            const data = await GetCategories();
             //דחיפת הנתונים לריקדס
            dispatch(setCategries(data));
        };

        if(categories.length === 0){
            //שליפת נתונים מהשרת
             fetchCategories();
        }
    }, []);

return (
    <div>
      <h2>קטגוריות</h2>
      <List component="nav" aria-label="categories">
           {this.state.categories.map(category => (
            <ListItem key={category.id} component="div">
              <Button component={Link} to={`/categories/${category.id}`} variant="text">
                <ListItemText primary={category.name} />
              </Button>
            </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Categories;