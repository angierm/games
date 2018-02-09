var $opc= $('#opc');//Contiene el valor de select
$opc.on("change",select);//Cuando el select cambie  se ejecuta la función

function select(event) {
  var $selectIndex = event.target.selectedIndex;//Trae el índice seleccionado desde 0
  // console.log($selectIndex);
  var $option = event.target[$selectIndex];//Trae toda la opción
  var $console = $option.dataset.console;//Trae solo el nombre de cada consola


// Ruta para acceder a la data
console.log(data[$console]['name']);
var result=data[$console]['name'];
// var stringResult= result.toString();
// console.log(stringResult);
  var $games= $('#games');
  $games.empty();
  var $form=$('<form />').attr('class','form-inline');
  var $label=$('<label />').attr('class','my-1 mr-2').text('Selecciona un juego');;
  var $select=$('<select />').attr('class','custom-select my-1 mr-sm-2');
  for (var i = 0; i < result.length; i++) {
    var $all=$('<div />').text(result[i]);
    // $games.append($all);

    var $option=$('<option />').attr('value',i).text(result[i]);
    $select.append($option);
		$form.append($label);
    $form.append($select);
    $games.append($form);
  }
};
