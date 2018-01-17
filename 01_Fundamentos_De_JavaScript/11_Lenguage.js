//variables no tipadas, almacenan valores complejas(functions, expressions, objetos)
// const no es necesariamente una variable.
// variable sin var puedes mover esa varible en cualquier scope.
// ; no es obligatorio


//IIFE (Inmediately INvoked Function Expression)
const nombre = "Julio";

(function saludar(){
    console.log(nombre)
})()

["Lunes", "Martes"].forEach(element => {
    console.log(element)
});

saludar()