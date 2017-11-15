//21 de febrero del 1993
const nacimiento = new Date(1993, 1, 21);
//fecha de hoy
const hoy = new Date();

//
const tiempo = hoy - nacimiento;

// tiempo en segundos
const tiempoSegundos = tiempo / 1000;
const tiempoMin = tiempoSegundos / 60;
const tiempoHoras = tiempoMin / 60;

//proximo cumpleaños
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());

const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
]
console.log(diasSemana[0]);
let i = 3;
console.log(diasSemana[i]);
console.log(diasSemana[proximo.getDay()]);