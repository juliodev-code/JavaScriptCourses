/*
pasar funciones en el futuro y no sabes cuando se va a ejecutar.

*/

setTimeout(function callback(){
    console.log('A');
}, 1000);

for(let i = 0; i < 99999999999; i++);

console.log('B')