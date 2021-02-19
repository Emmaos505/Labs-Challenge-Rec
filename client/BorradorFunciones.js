var productos = [
    {
        "id": "MLA801067364",
        "title": "Pantalones Hombre Cargo Gabardina Bolsillos Casuales Jogger",
        "price": 1889,
        "currency_id": "ARS",
        "available_quantity": 500,
        "thumbnail": "http://http2.mlstatic.com/D_683534-MLA31478230215_072019-O.jpg",
        "condition": "new"
    },
    {
        "id": "MLA878519499",
        "title": "Pantalon Jogguings Jogguers Mujer Rustico Trend ",
        "price": 2200,
        "currency_id": "ARS",
        "available_quantity": 500,
        "thumbnail": "http://http2.mlstatic.com/D_666039-MLA43453214712_092020-O.jpg",
        "condition": "new"
    },
    {
        "id": "MLA843483392",
        "title": "Jean Skinny Color Azul Hombre - Mizu",
        "price": 2199,
        "currency_id": "ARS",
        "available_quantity": 500,
        "thumbnail": "http://http2.mlstatic.com/D_928099-MLA43635593410_092020-O.jpg",
        "condition": "new"
    } ]


//Poder ordenar los productos en base a su precio, de forma ascendete o descendente. //////////////

// filtrado por mayor precio a menor precio   
productos.sort(function (a, b) {
  return b.price - a.price ;
});


// filtrado por menor a mayor precio
productos.sort(function (a, b) {
  return a.price - b.price ;
});

console.log(productos);


// Poder filtrar por condicion. /////////////////////////////////

// para mostrar los productos nuevos
productos.filter(producto => {
    producto.condition === "new"
})

// para mostrar los productos viejos
productos.filter(producto => {
    producto.condition !== "new"
})