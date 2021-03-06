import axios from 'axios';

const getProducts = (keyword) => {
    
    const apiUrl = `/api/search/?q=${keyword}`
    
    
    return axios.get(apiUrl)
    .then(productos => productos.data)
    .catch(error => console.log("err", error))
}

export default getProducts;
