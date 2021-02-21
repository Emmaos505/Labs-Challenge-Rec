import React, {useState} from 'react';
import getProducts from '../../services/getProducts';
import './SearchBar.css';





const SearchBar = ({keyword, setKeyword, setProductos, setLoading, setPrecio, setCondicion}) => {
    
    
    
    const handleChange = (e) => {
        const {value} = e.target;
        setKeyword(value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        getProducts(keyword)
        .then(productos => {setProductos(productos);
        setLoading(false); setPrecio('Todos'); setCondicion('Todos')})
        setKeyword('');
    }




    return (
        <form onSubmit = {handleSubmit} className = "busqueda">
            <input value = {keyword} onChange = {handleChange} type="text" placeholder="Search ... " />
        </form>
    )
}

export default SearchBar







