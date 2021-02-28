function validador(keyword) {
    var arreglo = keyword.split('');

    for(let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] === "ñ" || arreglo[i] === "Ñ") arreglo[i] = "n";
         
    }
    
    keyword = arreglo.join('');
    
    return keyword;
}

module.exports = validador;