
$(document).ready(loadPage);
function loadPage() {
    $('.caja').click(schedule); //Función de los horarios
		filter();//Función para filtrar los juegos conforme a consola

}


// Función de Horarios (habilitar y desabilitar)
function schedule(){
	$(this).attr ('class','color');
	alert ("Gracias por tu reservación");
}

//Función del filtro
function filter(){
	var $opc= $('#opc');//Contiene el valor de select
	$opc.on("change",select);//Cuando el select cambie  se ejecuta la función
	function select(event) {
	  var $selectIndex = event.target.selectedIndex;//Trae el índice seleccionado desde 0
	  // console.log($selectIndex);
	  var $option = event.target[$selectIndex];//Trae toda la opción
	  var $console = $option.dataset.console;//Trae solo el nombre de cada consola
		// Ruta para acceder a la data console.log(data[$console]['name']);
		var result=data[$console]['name'];
		// var stringResult= result.toString();
		// console.log(stringResult);
  	var $games= $('#games');
  	$games.empty();
    // El siguiente for se realiza por que el resultado de la data está en forma de arrego y con esto lo convertimos a string
  	for (var i = 0; i < result.length; i++) {
    	var $all=$('<div />').text(result[i]);//Agrega cada resultado por separado para que aparezca en el DOM como lista
    $games.append($all);}
	};
}
