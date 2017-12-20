//Spread operator

function suma(...numeros){
    const acum = numeros.reduce(function(acum, numero){
        acum += numero;
        return acum;
    }, 0);

    return acum;
}

const dobles = (... numeros) => numeros.map(numero => numero * 2);


const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0);

suma(4, 8, 12, 8954, 7); 
dobles(4, 8, 12, 8954, 7); 
pares(4, 8, 12, 8954, 7); 