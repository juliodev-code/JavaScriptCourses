 /*
    Memorizacion es guardar temporalmente valores que ya hemos calculado anteriormente.
    Y tiene sentido ya que en la recursion tiene referencia de valores pasados.
 */
 
 
 let contador = 1;
function fibonacci(num, memoria = {}){
    contador++;
    if(memoria[num]){
        return memoria[num];
    }

    if(num == 1){
        return 0;
    }
    if(num == 2){
        return 1;
    }

    return memoria[num] = fibonacci(num - 1, memoria) + fibonacci(num - 2, memoria);
}

fibonacci(4);
