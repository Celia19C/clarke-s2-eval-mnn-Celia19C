'use strict';

var score = document.querySelector('.tries');
var button = document.querySelector('.boton_try');
var puntos=0;
var pista=document.querySelector('.pista');
var guardar=document.querySelector('.name');


//El número aleatorio NO con cada click, fuera.
// Antes no era función, pero ahora sí porque luego, cuando acierten, la necesitaré para crear otro número nuevo.
function aleatorio3 (max){

	var aleatorio = Math.random()*max;
	aleatorio = Math.ceil(aleatorio);
	console.log(aleatorio);
	return aleatorio;

}
var aleatorio2 = aleatorio3(50);
// console.log(aleatorio2);

//El click
button.addEventListener('click', function(){
	//El input como valor
	var numero= document.querySelector('#box_number').value;
	numero=parseInt(numero);
	//Cuando es un número del 0 al 100
	if (numero<101 && numero>=0){
		//El numero de intentos al hacer click
		puntos=puntos+1;
		score.innerHTML=puntos;
		//Pistas
		if (numero<aleatorio2) {
			pista.innerHTML= 'Te has quedado corta ¡Prueba otra vez!';
		}
		else if (numero>aleatorio2) {
			pista.innerHTML='Te has pasado ¡Inténtalo de nuevo!';
		}
		else if (numero===aleatorio2){
			pista.innerHTML= '¡¡Enhorabuena, has acertado!!';
			guardar.classList.remove('name');
			guardar.classList.add('open');
		}
	}
	else if (numero>100 || numero<0) {
		//Cuando o no es un número o es menor de 0 o mayor de 100.
		alert ('Solo se permiten números del 0 al 100.');
	}

	else {
		alert ('Escribe un número con dígitos.');
	}
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var boton_s=document.querySelector('.boton_save');
var hstrc=document.querySelector('.lista');


var nombres = {
	name_s:
	[],
	intentos_s:
	[]
};

//Hacer click en el botón guardar
boton_s.addEventListener('click', function(){
	//Número aleatorio nuevo.Llamando a la función
	// aleatorio3(50);
	aleatorio2 = aleatorio3(100);
	// console.log(aleatorio2);
	//Histórico con objetos y dentro 2 arrays (nombres e intentos)

	function historicoLista () {
		var nombre= document.querySelector('#box_name').value;

		nombres.name_s.push(nombre);
		// console.log(nombres);
		var list_h= nombres.name_s;
		// console.log(list_h);
		nombres.intentos_s.push(puntos);
		console.log(nombres);
		var list_hi= nombres.intentos_s;
		// console.log(list_hi);
		//Para que se guarden uno después de otro, se acumulen.
		var add ='';
		for (var i=0;i<list_h.length;i++){
			add+= '<li>'+ list_h[i] +' - ' + list_hi[i] +' intentos </li>';
		};
		hstrc.innerHTML= add;
	}
	historicoLista();
	//Resetear
	function reseteo (){
		//Los inputs
		document.querySelector('#box_number').value = "";
		document.querySelector ('#box_name').value = "";
		//El marcador a 0 otra vez y las pistas
		puntos=0;
		score.innerHTML=puntos;
		pista.innerHTML='Escribe un número del 0 al 100 y prueba';
		//Volver a ocultar lo de guardar el nombre
		guardar.classList.remove('open');
		guardar.classList.add('name');
	}
	reseteo();
});
