// Recursividad / Recursión:
// Una función de recursion es básicamente llamarse a si misma hasta que ya no se necesite
// Ejemplo :

const recursion = new function() {
    for (let i = 0; i < 10; i++){ 
    console.log("procesando");
}
   if (x=10) { 
     console.log("listo")
   }
   else recursion
}
recursion

// Clases
// una clase es lo que conocemos como "molde" para la creación de objetos.

class persona {
    constructor (edad, altura, personalidad) {
        this.altura = altura
        this.edad = edad
        this.personalidad = personalidad
    }
}

var juanito = new persona ("1.75", "19", "amable")

console.log(juanito.edad);
console.log(juanito.altura);
console.log(juanito.personalidad);

// Callback
// Un callback es una función que llama a otra función.

function suma(callback){
    a = 1;
    b = 2; 
    c = a + b;
    callback();
}

function resultado(){
    console.log ('la suma de a + b es: ' + c)
}
    suma (resultado);

// Array
// El array es una estructura que permite almacenar diferentes tipos de datos.

const array = [1,"dos", [1,2,3], objetox = {objeto1:'objeto1', objeto2:'objeto2'}]

console.log (array);
console.log (array[1]);

// Objeto
// Un objeto es una "variable" a la cual asignamos ciertas propiedades

const objeto = {
    propiedad1 : 'propiedad1',
    propiedad2 : 'propiedad2'
}
console.log(objeto);
console.log(objeto.propiedad1);

// Closure 
// -w-