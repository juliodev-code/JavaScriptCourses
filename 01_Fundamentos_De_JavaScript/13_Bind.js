//Col y apply
class Toggable{
    constructor(el){
        //inicializar el estado interno
        this.el = el;
        this.el.innerHTML = 'Off';
        this.activated = false;
        this.el.addEventListener('click', this.onClick.bind(this));
    }

    onClick(ev){
        //Cambiar estado externo
        //lamar toggle}
        this.activated = !this.activated;
        this.toggleText();
    }

    toggleText(){
        //Cambiar el texto
        this.el.innerHTML = this.activated  ? 'On' : 'Off';
    }
}

const button = document.getElementById("boton");
const miBoton = new Toggable(button);

function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

const saludarJulio = saludar.bind(null, "JULIO");

saludar("Julio", "Jaramillo");