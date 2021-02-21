import React, {useState} from 'react'
import Catalogo from '../components/Catalogo/Catalogo'
import FilterBox from '../components/FilterBox/FilterBox.js'
import NavBar from '../components/NavBar/NavBar'
import ProductCard from '../components/ProductCard/ProductCard'
import SearchBar from '../components/SearchBar/SearchBar'




const Home = () => {

    const [keyword, setKeyword] = useState('');
    const [productos, setProductos] = useState('');

    // Para renderizar el spinner
    const [loading, setLoading] = useState(false);

    // Para filtros
    const [precio, setPrecio] = useState('Todos');
    const [condicion, setCondicion] = useState('Todos');




    return (
        <div>
           <NavBar />
           <SearchBar keyword = {keyword} setKeyword = {setKeyword} 
           setProductos = {setProductos} setLoading = {setLoading} setPrecio = {setPrecio} setCondicion = {setCondicion}/>
           <FilterBox precio = {precio} condicion = {condicion} setPrecio = {setPrecio} setCondicion = {setCondicion} />
           <Catalogo precio = {precio} productos = {productos} 
           loading = {loading} condicion = {condicion} />

        </div>
    )
}

export default Home
