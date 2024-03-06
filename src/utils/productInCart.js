import api from './api'

const GetAllProductInCart = async()=>{
    return await api.get('ProductInCart/getAllProductInCart').then(res => res.data);
}

const GetCartById = async(id) => {
return await api.get(`ProductInCart/GetCartById/${id}`).then(res => res.data);
//`$ {} `-> יצירה של מחרוזת עם התוכן של המשתנה
}

const AddProductToCart = async(produc) => {
    // api.post('Category/AddCategory', category) - מקבל category כי בפונקציה של הקונטרולר הוא fromBody 
return await api.post('ProductInCart/AddProductToCart', produc).then(res => res.data);
}

const RemoveProduct = async(id) => {
return await api.delete(`ProductInCart/${id}`).then(res => res.data);
}

const UpdateProduct = async(id, productUpdate) => {
return await api.put(`ProductInCart/${id}`, productUpdate).then(res => res.data);
}

export {GetAllProductInCart,GetCartById, AddProductToCart,RemoveProduct, UpdateProduct}

