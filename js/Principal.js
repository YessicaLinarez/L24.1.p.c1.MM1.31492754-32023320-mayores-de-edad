import Cl_Persona from "./Cl_Persona.js";
import Cl_MayoresEdad from "./Cl_MayoresEdad.js";

let persona = new Cl_Persona("Luis", 15);
let persona2 = new Cl_Persona("Ana", 19);
let persona3 = new Cl_Persona("Jose", 21);
let persona4 = new Cl_Persona("Carmen", 17);
let persona5 = new Cl_Persona("Rosa", 18);
let persona6 = new Cl_Persona("Jose", 22);
let persona7 = new Cl_Persona("Maria", 17);
let persona8 = new Cl_Persona("Luz", 19);
let persona9 = new Cl_Persona("Rafael", 23);
let persona10 = new Cl_Persona("Liz", 15);
let persona11 = new Cl_Persona("Marcos", 20);
let persona12 = new Cl_Persona("Leo", 16);

let mayoresEdad = new Cl_MayoresEdad();

mayoresEdad.procesarPersona(persona);
mayoresEdad.procesarPersona(persona2);
mayoresEdad.procesarPersona(persona3);
mayoresEdad.procesarPersona(persona4);
mayoresEdad.procesarPersona(persona5);
mayoresEdad.procesarPersona(persona6);
mayoresEdad.procesarPersona(persona7);
mayoresEdad.procesarPersona(persona8);
mayoresEdad.procesarPersona(persona9);
mayoresEdad.procesarPersona(persona10);
mayoresEdad.procesarPersona(persona11);
mayoresEdad.procesarPersona(persona12);

let salida = document.getElementById("salida");
salida.innerHTML+= "<br> Cantidad de personas: " +mayoresEdad.devolverContPersonas();
salida.innerHTML+= "<br> Cantidad de personas mayor de edad: " +mayoresEdad.devolverContMayoresEdad();
salida.innerHTML+= "<br> Cantidad de personas: " +mayoresEdad.porcentajeMayoresEdad().toFixed(2) + "%";
