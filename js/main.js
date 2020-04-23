"use strict"

window.addEventListener('load', function() {
  // console.log('Hola mundo!');

  // variables de tipo VAR son globales
  // Tipo LET para usar usar con scope local
  // Constantes CONST para proteger el valor asignado

  var numero = "10.9";
  var numero1 = 10.7;

  // console.log('parceInt: ', parseInt(numero));
  // console.log('parceFloat: ', parseFloat(numero));
  // console.log('toFixed',typeof numero1.toFixed()); //devuelve 11
  // console.log('toPrecision', numero1.toPrecision()); //devuelve
  // console.log('toString',typeof numero1.toString()); //devuelve
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //Busquedas de texto por indice y por expresion regular (si alguno arroja -1 es porque no encontro ninguna coincidencia)

  var mensaje = 'Practicando desde Javascript desde pc';
  var resultado = null;

  // resultado = mensaje.indexOf('desde'); //indice donde encuentra la primer coincidencia
  // resultado = mensaje.lastIndexOf('desde'); //indice donde encuentra la ultima coincidencia
  // resultado = mensaje.search('Javascript'); // similar a indexOf
  // resultado = mensaje.search(/ja/i); // search con expresion regular i(-inCaseSensitive- no discrimina Mayuscaula de Minuscula)

  //console.log(resultado);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Busquedas de caracteres en cadena de textos

  // resultado = mensaje.match(/desde/g); // Busca en toda la cadena pero solo la primera vez, con el operador g(-global- busca todas las incidencias) y operador i(-inCaseSensitive- para discriminar Mayuscaula y Minuscula)
  // resultado = mensaje.substr(12, 19); // Busca desde hasta (caracter)
  // resultado = mensaje.substring(0,11); // Busca desde el caracter 0 y desde 0 al caracter 10
  // resultado = mensaje.charAt(3); // Busca el caracter especificado

  // console.log(resultado);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Busquedas de cadenas de texto especificas

  // resultado = mensaje.startsWith('desde'); // si comienza con.., devuelve true o false, discrimina si es con mayuscula o minuscula

  // resultado = mensaje.endsWith('pc'); // si termina con.. devuelve true o false, discrimina si es con mayuscula o minuscula

  // resultado = mensaje.includes('Javascript'); // si esta incluido, devuelve true o false, discrimina si es con mayuscula o minuscula


  // console.log(resultado);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Metodos de generacion, reemplazo y separacion

  // resultado = mensaje.repeat(4); // Repite el mensaje 4 veces
  // resultado = mensaje.replace('pc', 'casa'); // Busca una cadena de texto y la reemplaza / No afecta el valor original
  // resultado = mensaje.slice(6); // Coloca el inicio en el caracter 6 y el resto no es considerado
  // resultado = mensaje.split(); // Separa la cadena de texto en un arreglo (array), puede recibir como parametro entre '' a travez de que hacer la separacion
  // resultado = mensaje.trim(); // Suprime, poda los espacios en blanco antes y despues de la cadena de texto

  // console.log(resultado);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Metodos de transformacion de textos
  var value = 1234;

  // resultado = value.toString(); // transforma numero a cadena de texto
  // resultado = mensaje.toLowerCase(); // transforma la cadena de etexto a minuscula
  // resultado = mensaje.toUpperCase(); // transforma la cadena de etexto a mayuscula

  // console.log(resultado);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 // Plantillas y literales

 // var mensaje1 = 'Javascript';
 // var mensaje2 = 'PHP';
 // var mensaje3 = `Me gusta ${mensaje1} y tambien ${mensaje2}`; // comillas especiales llamadas Backtick, determinar como se va a escribir el texto, usando plantillas mas versatiles

 // console.log(mensaje3);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 // Operaciones basicas con arreglos

 // var arreglo = [ 'azul', 'verde', 'rojo' ];
 // arreglo.push('negro'); // metodo para agregar elemento
 // arreglo.pop(); // metodo para sacar elemento

 // var mensajeArreglo = arreglo.join();// METODO PARA RETORNAR UNA CADENA DE TEXTO EN ARREGLO

 // console.log(arreglo, mensajeArreglo);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 // Generar arreglos con split(), from(), of()
var colores = 'azul, rojo, negro, bordo';
var coloresAConvertir = colores.split(', '); // Convierte una cadena en un arreglo, recibe por parametro la separacion
var parrafosHTML = Array.from(document.querySelectorAll('.parrafos p')); // Convierte en un arreglo formal (Array)
var coloresAConvertir1 = Array.of('blanco', 'verde', 'violeta' )// Genera y convierte en arreglo
//
//  console.log(coloresAConvertir);
//  console.log(parrafosHTML);
//  console.log(coloresAConvertir1);


 // Ordenando arreglos
 coloresAConvertir.sort(); // Ordena alfabeticamente siempre y cuando se trate de un formato en arreglo
 coloresAConvertir.reverse(); // Envia el arreglo en orden inverso
 // console.log(coloresAConvertir);

 // Iterando arreglos for in
 var array = ['hola', 'como', 'estas', 'vos'];
 for(let i in array){     // variable en el arreglo
   // console.log(array[i]); // i es el indice en donde se encuentra
 }

 // Metodo para iterar arreglos forEach
 array.forEach( i => {     //i es parametro
   // console.log(i);
 });

// Buscar en arreglos
var busqueda = array.find( busqueda => busqueda == 'estas' ); // busca dentro del arreglo, si esta retorna 'estas', sino undefined
// console.log(busqueda);

busqueda = array.findIndex( busqueda => busqueda == 'vos' ); // busca el indice dentro del arreglos
// console.log('Se encuentra en el indice: ', busqueda );

// Filtrando arreglos
var menu = [
  {
    nombre: 'milanesas',
    precio: 250,
    pais: 'Italia',
  },
  {
    nombre: 'ravioles',
    precio: 270,
    pais: 'Italia',
  },
  {
    nombre: 'bife',
    precio: 300,
    pais: 'Argentina',
  },
];
var filtrar = menu.filter( plato => plato.pais == 'Italia' ); // trae todos lo que incidan en el filtro

// console.log(filtrar);

// Validacion de elementos en un arreglos
var validarArreglo = menu.some( plato => plato.precio > 250 ); // Validó que hay uno o mas platos mayores a 250

// console.log('Hay platos mayores a 250$? ',validarArreglo);

var validarArregloEstricto = menu.every( plato => plato.precio == 250 ); // Valida que todos los elementos de dicho arreglo cumplan con cierta condicion

console.log('Todos los platos cuestan 250$? ',validarArregloEstricto);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 // function comun
      // function nombre(parametros){
          //return..;
      // };

 // funcion IF ternaria
    // var variable = codicion ? true : false; // true (lo que ejecuta si la funcion se cumple), false (lo que ejecuta si no se cumple)

 // Arrow function
 // var variable = parametro => codigo a ejecutar;
 // var variable = (parametro1, parametro2) => {codigo a ejecutar}; // si se reciben mas parametros y si el codigo a ejecutar recibe mas indicaciones


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  // trabajando Objetos

  var palabras = new String('casa');
  // console.log(palabras, typeof palabras);




});
