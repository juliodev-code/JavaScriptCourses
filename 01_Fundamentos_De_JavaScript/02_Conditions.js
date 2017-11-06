const startWars7 = 'Star Wars: El despertar de la fuerza.';
const pgStarWars7 = 13;

const nameJulio = 'Julio';
const ageJulio = 24;

const nameSasha = 'Sasha';
const ageSasha = 13;

function canWatchStarWars7(name, age, isWithAdult = false){
    if(age >= pgStarWars7){
        alert(`${name} can see ${startWars7}`);
    }
    else if(isWithAdult){
        alert(`${name} can watch ${startWars7} because the person is with an adult. `);
    }
    else{
        alert(`${name} cat not watch the movie ${startWars7}. 
        This people is ${age} years old and this people need to be ${pgStarWars7} years old.`)
    }
}

let canWatchMovie = (name, age, isWithAdult = false)=>{
    if(age >= pgStarWars7){
        alert(`${name} can see ${startWars7}`);
    }
    else if(isWithAdult){
        alert(`${name} can watch ${startWars7} because the person is with an adult. `);
    }
    else{
        alert(`${name} cat not watch the movie ${startWars7}. 
        This people is ${age} years old and this people need to be ${pgStarWars7} years old.`)
    }
}

canWatchMovie(nameJulio, ageJulio );
canWatchStarWars7(nameJulio, ageJulio);
canWatchStarWars7(nameSasha, ageSasha, true);

