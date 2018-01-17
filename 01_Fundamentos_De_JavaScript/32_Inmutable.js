//programacion funcional (inmutablity)
let julio = {nombre: 'Sacha', apellido='Jaramillo',edad: 24}

cumpleanos = function(persona){
    const clone = Object.assign({}, persona);
    clone.edad++;
    return clone;
}