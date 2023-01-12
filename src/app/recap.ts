import { MapType } from "@angular/compiler";

//Tipado de variables reduce hasta un 60% de bugs
const username: string = 'May';
const numero1: number = 20;

//funciones con tipado
const sum = (a:number, b:number) => {
  return a + b;
}
  sum(1,3)

//orientado a objetos

class Person{
  private age:number;
  lastName:string;

  constructor(age:number, lastname:string){
    this.age = age;
    this.lastName = lastname;

  }
}

//Creamos una instancia del objeto anterior
 const nico = new Person(20, 'Pérez')

//variables privadas no pueden ser consultadas desde afuera

//nico.age
// Esto ya no funciona en el caso anterior
console.log(nico.lastName)
//devolvería 'Pérez'


//String {{Interpolation}}
//{{ 1 + 1 }}
//{{ myVar }}
//{{ myFunction() }}

