import api from './api'

const GetProduct = async()=>{
    return await api.get('Product/getProduct').then(res => res.data);
}

const getproductUpdateById = async(id) => {
return await api.get(`Product/getProductById/${id}`).then(res => res.data);
//`$ {} `-> יצירה של מחרוזת עם התוכן של המשתנה
}

const AddProduct = async(produc) => {
    // api.post('Category/AddCategory', category) - מקבל category כי בפונקציה של הקונטרולר הוא fromBody 
return await api.post('Product/AddProduct', produc).then(res => res.data);
}

const RemoveProduct = async(id) => {
return await api.delete(`Product/${id}`).then(res => res.data);
}

const UpdateProduct = async(id, productUpdate) => {
return await api.put(`Product/${id}`, productUpdate).then(res => res.data);
}

export {AddProduct, GetProduct, RemoveProduct, UpdateProduct, getproductUpdateById}

