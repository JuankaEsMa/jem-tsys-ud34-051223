import './style.css'
import {Persona} from './Persona.ts'

let persona1 = new Persona("39976231", "Joan Carles", 21, 55, 1.72, "H");
let persona2 = new Persona("39976231", "Ainara", 33, 55, 1.60, "M");
let persona3 = new Persona("39976231", "Marc", 28, 70);
let personasArray = new Array<Persona>;
personasArray.push(persona1, persona2, persona3);
personasArray.forEach(element => {
  let containerPersona = document.createElement("div");
  containerPersona.innerHTML = 
  `
    <div>${element.getDni()}</div>
    <div>${element.getNombre()}</div>
    <div>${element.getEdad()}</div>
    <div>${element.getPeso()}</div>
    <div>${element.getAltura()}</div>
    <div>${element.getSexo()}</div>
  `
  containerPersona.classList.add("containerPersona");
  document.querySelector<HTMLDivElement>('#app')!.appendChild(containerPersona);
});


