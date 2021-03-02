const request = require('request');
const validador = require('./validadorKeyword.js');

var cache = {};


const getProducts = async (req, res) => {
    
    const {q} = req.query;
    const keyword = validador(q);
    
    
    var url = `https://api.mercadolibre.com/sites/MLA/search/?q=${keyword}`
    
    if (cache[keyword]) return res.status(200).json(cache[keyword]);

    try {
        console.log("entre a hacer una request a la API de ML");
        request(url, (error, response, body) => {
            
            // el body es la respuesta a la api de ML, pero es un Json, por eso lo parseamos
            body = JSON.parse(body);
            var arregloModificado = [];
            if (body.results.length) {
            
            // si hay algo dentro de la props results, lo guardamos en un arreglo de objetos
            // con la estructura que pide el challenge    
            body.results.forEach(producto => {
               
                var productDetail = {
                
                    id : producto.id, 
                    title : producto.title,
                    price : producto.price,
                    currency_id : producto.currency_id,
                    available_quantity : producto.available_quantity,
                    thumbnail : producto.thumbnail,
                    condition : producto.condition
                    
                };
               
                arregloModificado.push(productDetail);
                           
            });

            cache[keyword] = arregloModificado;
                       
       
        }
        
        res.status(200).json(arregloModificado);
    
    })
    
    
    } catch (error) {

        res.status(500).send({message : error})
        
    }


}

module.exports = getProducts;
        
        