function platzom(str){
    let translation = str;
    //Si la palabra termina en -ar se le quitan esos dos caracteres
    if(str.toLowerCase().endsWith('ar')){
        translation = str.slice(0, -2);
    }
    //SI la palabra tiene z, se le añade "pe" al final
     if(str.toLowerCase().startsWith('z')){
        translation += "pe";
    }
    //Si la palabra traducida tiene 10 caracteres, sedebe de partir a la mitad
    const length = translation.length;
    if(translation.length >= 10){
        const firstHalf = translation.slice(0, Math.round(length / 2));
        const secondHalf = translation.slice(Math.round(length / 2));
        translation = `${firstHalf}-${secondHalf}`;
    }
    //Si la palabra original es un palindromo
    // ninguna de las anteriores cuenta y se devuelve la misma palabra añadiendo 
    //lower and upper words.
    const reverse = (str) => str.split('').reverse().join('');
    function minMay(str){
        const length = str.length;
        let translation = '';
        let capitalize = true;
        for(let i = 0; i < length; i++){
            const char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    }
    if(str == reverse(str)){
        return minMay(str);
    }
    return translation;
}

console.log(platzom('Programar'));
console.log(platzom('zorro'));
console.log(platzom('zarpar'));
console.log(platzom('abecedario'));
console.log(platzom('sometemos'));