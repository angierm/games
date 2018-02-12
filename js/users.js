var totalAmount = 0; // Guardará el total de la renta, dependiendo de los insumos
var onlineCharge = 0; // Guarda el cargo por juego en línea;
var chargeExtraController = 0; // Guarda el cargo por controles extra

/* ###########################################
Evento change del id 'local'
Este evento se encarga de detectar cuando el radio button asociado al juego local está seleccionado.
Si este botón es seleccionado y no se ha seleccionado previamente el radio button correspondiente al juego online,
no se realizará ninguna acción, en caso contrario, cuando previamente se haya seleccionado el radio button de juego online,
la variable onlineCharge se decrementará en 5 unidades, que corresponden al cargo por juego online.
############################################## */
$( '#local' ).change(function() {
  if($(this).prop("checked")){
    if(onlineCharge !=0){
      parseInt(onlineCharge-=5);
      calculateAmount();
    }
  }
})
.change();

/* ###########################################
Evento change del id 'online'
Este evento se encarga de detectar cuando el radio button asociado al juego online está seleccionado.
Si este botón es seleccionado, la variable onlineCharge se incrementará en 5 unidades, que corresponden
al cargo por juego online.
############################################## */
$( '#online' ).change(function() {
  if($(this).prop("checked")){
    parseInt(onlineCharge+=5);
    calculateAmount();
  }
})
.change();

/* ###########################################
Evento change del id 'extraControllers'
Este evento se encarga de detectar cuando el usuario elige el número de controles que necesitará para jugar.
Si selecciona el valor de 1 control, se reinicia la variable chargeExtraController a cero, ya que se incluye
1 control con la renta de la consola.
A partir de la selección de 2 hasta 4 controles(por el momento), se calcula el cargo por control extra, multiplicando
5 unidades por el número de controles extra menos 1, que es el que se incluye con la renta.
############################################## */
$( '#extraControllers' ).change(function() {
  if(parseInt($(this).val()) == 1){
    chargeExtraController = 0;
    calculateAmount();
  }
  else if(parseFloat($(this).val())>=2 && parseFloat($(this).val())<=4){
    chargeExtraController = parseFloat(5 * ($(this).val()-1));
    calculateAmount();
  }
})
.change();

/* ###########################################
Función calculateAmount
Esta función se encarga de calcular el total a pagar por el usuario, sumando las variables calculadas previamente y
colocando el resultado dentro del elemento con el id 'totalAccount', para mostrar el total a pagar al usuario.
############################################## */
function calculateAmount(){
  totalAmount = parseFloat(20 + onlineCharge + chargeExtraController);
  $('#totalAccount').html(totalAmount.toFixed(2));
  // actualiza monto de pago en paypal con respecto al total calculado según la elección del usuario
  $('#paypal').val(totalAmount.toFixed(2));
}
