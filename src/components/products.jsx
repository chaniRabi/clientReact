import React, {useEffect, useState} from 'react';//שימוש בהוק אפקט יביא נתוני מוצר כאשר נטען הרכיב
import { GetProduct } from '../utils/product';//באמצעות הפונקציה יביא רשימה של מוצרים
import Product from './Product';
import { setProducts } from '../features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

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
        return <div>טוען מוצרים</div>; 
    }
     
    return(
        <div className='products'>
            {products.map((product)=>(
              <Product key={product.id} name={product.name} price={product.prise} description={product.description}/>
            ))}
        </div>
    );
};

export default Products;