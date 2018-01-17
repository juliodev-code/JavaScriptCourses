//una sola cosa a la vez
/*
    pila de ejecucion(call stack)
    que pasa cuando ejecuta un programa:
        - carga el archivo.
        - carga de funciones.
        - la llamada de esas funciones de up to down.
        - In moment to close the program, the process will desactive in order according the results were executed.
        - It can delegate progress and after return to the process.
        -   - settimeout.
                pide a otro processo que ejecute el process timeout.
                - web api / c++ lib -> set time out.
                -la cola de tareas de la web api ejecuta la funcion.
                    si esta la funcion esta en nuestro script ejecuta desde esta referencia.
                    si no ve en la memoria si este se encuentra alli.


*/

console.log('Hola');
setTimeout(function(){
    console.log('Medio');
},0);

console.log('Adios');