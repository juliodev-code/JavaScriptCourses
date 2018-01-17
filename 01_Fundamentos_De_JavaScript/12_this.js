//referencia de un objeto
class Persona{
    constructor(nombre, amigos){
        this.nombre = nombre;
        this.amigos = amigos || [];
    }

    listarAmigos(){
        //Solution by variables

       // const self = this;
        // this.amigos.forEach(function (amigo){
        //     console.log(`Mi nombre es ${ self.nombre } y soy amigo de ${amigo} `);
        // });

        //Solution with bind;

        // this.amigos.forEach(function (amigo){
        //     console.log(`Mi nombre es ${ this.nombre } y soy amigo de ${amigo} `);
        // }.bind(this));

        this.amigos.forEach( (amigo) => {
            console.log(`Mi nombre es ${ this.nombre } y soy amigo de ${amigo} `);
        });
    }
}

const julio = new Persona("Julio", ["Pedro", "Juan", "Pepe"]);

