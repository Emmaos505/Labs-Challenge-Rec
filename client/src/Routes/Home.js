import React, {useState} from 'react'
import Catalogo from '../components/Catalogo/Catalogo'
import FilterBox from '../components/FilterBox/FilterBox.js'
import NavBar from '../components/NavBar/NavBar'
import SearchBar from '../components/SearchBar/SearchBar'
import Paginacion from '../components/Pagination/Pagination.js';





const Home = () => {


    const scroll = () => {
        const elemento = document.querySelector('#filtrosBusqueda');
        elemento.scrollIntoView('smooth', 'end');
    }

    const [keyword, setKeyword] = useState('');
    const [productos, setProductos] = useState('');

    // Para renderizar el spinner
    const [loading, setLoading] = useState(false);

    // Para filtros
    const [precio, setPrecio] = useState('Todos');
    const [condicion, setCondicion] = useState('Todos');

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(30);  

/*     // Get current posts(productos) Solamente de la pagina donde estemos parados
    const indexOfLastProduct = currentPage * productsPerPage; 
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct); */

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        scroll();
    }


    return (
        <div>
           
           <NavBar/>
           
           <SearchBar
           keyword = {keyword}
           setKeyword = {setKeyword}
           setProductos = {setProductos}
           setLoading = {setLoading}
           setPrecio = {setPrecio}
           setCondicion = {setCondicion}
           paginate = {paginate}
           />
           
           <FilterBox
           precio = {precio}
           condicion = {condicion}
           setPrecio = {setPrecio}
           paginate = {paginate}
           setCondicion = {setCondicion}
           />
           
           <Catalogo 
           precio = {precio}
           productos = {productos}
           loading = {loading}
           condicion = {condicion}
           currentPage={currentPage}
           productsPerPage={productsPerPage}
           />
           
           <Paginacion 
           productsPerPage = {productsPerPage} 
           currentPage = {currentPage}
           totalProducts = {productos.length}
           paginate = {paginate}
           />

        </div>
    )
}

export default Home
