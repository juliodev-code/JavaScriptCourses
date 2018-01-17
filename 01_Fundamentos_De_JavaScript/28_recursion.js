/*
    son funciones que se llaman a si mismas, el resultado de la funcion
    es el resultado de la misma funcion, es importante para solucionar series
    o algoritmos que toman en cuenta valores pasados.

    La recursividad se divide en dos partes indispensables
        a)un caso base.
        b) el llamado de la funcion dentro de la funcion.
    Sin un caso base la funcion se llamara indefinidamente.
*/

//caso base
function fibonacci(num){
    if(num == 1){
        return 0;
    }
    if(num == 2){
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(0);
fibonacci(0);
fibonacci(0);
fibonacci(0);
fibonacci(0);
fibonacci(0);
fibonacci(0);
fibonacci(0);
