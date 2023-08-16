// 14-08-2023

    // function mensaje(){
    //     console.log("Soy un mensaje")
    // }
    // mensaje()
    // // console.log(mensaje())
    // function retorno(){
    //     return "Hola Mundo"
    // }
    // retorno()
    // console.log(retorno())
    //
    // function areaRectangulo(b,h){
    //     resultado = b*h
    //     console.log(resultado)
    // }
    // areaRectangulo(5,6)

    // function concatenacion(a,b){
    //     return a + b
    // }
    // concatenacion(a="Hola",b="Mundo")
    // console.log(concatenacion())



    //Ejercicio 1:
    // let edad = prompt("Ingrese la edad: ")
    // function calcularAñoNci(){
    //     actual = 2023;
    //     final = actual - edad;
    //     alert("Tu año de nacimiento es: " + final)
    // }
    // calcularAñoNci()
    // console.log(calcularAñoNci())

    //Ejercicio 2:
    // function conversion(){
    //     let Celsius = prompt("Ingrese la temperatura en °C: ")
    //     if (Celsius == ""){
    //         alert("No ingresaste ningun valor.");
    //     }
    //     else{
    //         alert(((9 * parseInt(Celsius))/ 5) + 32 + " °F");
    //     }
    // }
    // conversion();

    // Ejercicio 3:
    // Array = [
    //     2,4,6,8,10
    // ]
// 15-08-2023
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log('Hola! Mi nombre es: $(this.nombre) y tengo $(this.edad)')
    }
}
const persona1 = new Persona("Camilo",19);
const persona2 = new Persona("Mariana",17);
persona1.saludar()
persona2.saludar() 

// new
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class stack{
    constructor(){
        this.top=null;
        this.size=0;
    }
    push(value){
        
    }
}