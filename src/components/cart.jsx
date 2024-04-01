import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {registerUser} from "../utils/usersAPI";
import {AddProductToCart,RemoveProduct, GetProductsInCartByUserId } from "../utils/productInCart";

const Cart = () =>{
  const[products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // TODO: לשלוח בקריאת שרת את המזהה של היוזר המחובר כרגע לאתר
      // את שולפת את היוזר המחובר מהרידקס - בסלייס של היוזר ולוקחת את המזהה משם ואותו שולחת בקריאת שרת
      const data = await GetProductsInCartByUserId(1011);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handelAddToCart = (productId) => {
    AddProductToCart(productId);
    setCart([...cart, productId]);
  };

  const handelRemoveFromCart = (productId) => {
    RemoveProduct(productId);
    const newCart = cart.filter((item) => item !== productId);
    setCart(newCart);
  };
  
  return (
    <div className="shopping-basket">
            <h1>עגלת קניות</h1>

    <div className='products'>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>ש"ח{product.price}</p>
          <button onClick={()=>handelAddToCart(product.id)}>הוסף לסל</button>
          <button onClick={()=>handelRemoveFromCart(product.id)}>הסר מהסל</button>
        </div>
      ))}
    </div>
    <div className='cart'>
      <h2>סל</h2>
        <ul>
          {cart.map((productId)=>(
            <li  key={productId}>{`Product ID: ${productId}`}</li>
          ))}
          </ul>        
        </div>
    </div>
  );
};

export default Cart;

