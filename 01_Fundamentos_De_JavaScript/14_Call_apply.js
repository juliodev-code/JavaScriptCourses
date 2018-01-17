//
const julio = {
    nombre: 'Julio',
    apellido: 'Jaramillo'
}


function saludar(veces, uppercase){
    let str = `Hola ${this.nombre} ${this.apellido}`;
    str = uppercase ? str.toUpperCase() : str;
    for(let i = 0; i < veces; i++){
        console.log(str);
    }
}

// window.nombre = "Julio";
// window.apellido = 'Jaramillo';
saludar.call(julio, 3, true);

saludar.apply(julio, [3, true]);