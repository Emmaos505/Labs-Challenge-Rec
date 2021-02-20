import axios from 'axios';

const getProducts = (keyword) => {
    
    const apiUrl = `http://localhost:4000/api/search/?q=${keyword}`
    
    
    return axios.get(apiUrl)
    .then(productos => productos.data)
    .catch(error => console.log("err", error))
}

export default getProducts;
