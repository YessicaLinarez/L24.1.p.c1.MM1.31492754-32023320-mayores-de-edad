export default class Cl_MayoresEdad{
    constructor(){
   this.contMayoresEdad = 0;
   this.contPersonas = 0;
   this.contMenoresEdad = 0;
    }

procesarPersona(p){

this.contPersonas++;

if(p.edad >= "18"){
this.contMayoresEdad++;
}

}

devolverContPersonas(){
    return this.contPersonas;
}
devolverContMayoresEdad(){
    return this.contMayoresEdad;
}
porcentajeMayoresEdad(){
return this.contMayoresEdad*100/this.contPersonas;}
}