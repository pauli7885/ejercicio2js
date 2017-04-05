// var a=1
// var b=2

// if (false){
//   console.log("esto no se va a imprimir")
// }

// if (true){
//   console.log("esto si se va a imprimir")
// }

// if(a>b){ //false
//   console.log("a efectivamente es mayor que b, esto es falso y nunca se va a ejecutar")
// }
// if(a<b){ //true
//   console.log("a es menor que b")
// }
// if(1===1){
//   console.log("1 es igual a 1")
// }
// if(1<==1){

// }
/**
 * menor que < //1<4
 * mayor que > // 4>2
 * menor o igual que <= // 1<=4
 * mayor o igual que >= // 4>=2
 * igual o (semenjante) == // "1" == 1// true
 * exactamente igual === //"1"===1//false
 * distinto != // 1!='hola' //true
 * MUY distinto !== // "1" !==1// true
 */

// var edad=18
// if(edad>18){
//   alert("Puedes pasar!, eres lo suficientemente grande")
// } else{
//   alert("eres muy joven, te vas a disney.com")
// }
/**
 * Construir una aplicacion que le pida el nombre
 * al usuario, tambien que le pida la edad. Luego debe pedir
 * cuantos a;os le gustaria tener.
 * El programa debe indicarle al ususario cuantos a;os tienen que pasar o en cuanto tiene que rejuvenecer. 
 */
var Nombre=prompt("Ingresa tu nombre")
var Edad=Number(prompt("Ingresa tu edad"))
var Futuro=Number(prompt("Cuantos años quieres tener?"))
var Resta=Math.abs(Futuro-Edad)

if(Futuro>Edad){
alert("Hola "+ Nombre + " tienen que pasar " + Resta + " años" + " para que cumplas " + Futuro)
}
else{
alert("Hola "+ Nombre + " tendrias que rejuvenecer para tener " + Resta + " años ")
}

