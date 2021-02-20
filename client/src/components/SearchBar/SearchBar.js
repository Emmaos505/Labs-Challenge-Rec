import React, {useState} from 'react';
import './SearchBar.css';




const SearchBar = ({keyword, setKeyword}) => {
    
    
    
    const handleChange = (e) => {
        const {value} = e.target;
        setKeyword(value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(keyword);
        setKeyword('');
    }




    return (
        <form onSubmit = {handleSubmit} className = "busqueda">
            <input value = {keyword} onChange = {handleChange} type="text" placeholder="Search ... " />
        </form>
    )
}

export default SearchBar







