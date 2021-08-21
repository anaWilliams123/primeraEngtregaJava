
//Programa para conocer al usuario para empezar un entrenamiento físico. 


function pesoideal()
 {var dato, peso, altura, sexo, edad;dato = window.prompt("Dígame su altura en cm");
altura = parseInt(dato);
dato = window.prompt("Digame su edad en años")
edad = parseInt(dato);
sexo = window.prompt("Dígame su sexo, hombre = h o mujer = m");
if (sexo == "h"){peso = 50 + ((altura - 150) / 4)*3 + (edad - 20)/4;}

else peso = peso=60 * 0.9;alert("Su peso ideal es " + peso + " Kg")}




function objetoPersona() {
 this.nombre= "Ana"; this.altura = 1.70; 
this.nacimiento = new Date(1999,06,03); this.pesoIdeal=55;
} 
var persona = new objetoPersona();
alert("Hola soy"+ "\n" + persona.nombre); alert(" mi altura es :"+ persona.altura + "cm"); alert("nacie en " + persona.nacimiento);alert(" mi peso ideal es :"+ persona.pesoIdeal + "kg");alert(" ¿Cuál es el tuyo?:");

