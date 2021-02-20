import React, {useState} from 'react'
import Catalogo from '../components/Catalogo/Catalogo'
import FilterBox from '../components/FilterBox/FilterBox'
import NavBar from '../components/NavBar/NavBar'
import ProductCard from '../components/ProductCard/ProductCard'
import SearchBar from '../components/SearchBar/SearchBar'




const Home = () => {

    const [keyword, setKeyword] = useState('');
    const [productos, setProductos] = useState('');




    return (
        <div>
           <NavBar />
           <SearchBar keyword = {keyword} setKeyword = {setKeyword} 
           setProductos = {setProductos} />
           <Catalogo productos = {productos} />

        </div>
    )
}

export default Home
