/*
Comprueba si el valor está clasificado como booleano primitivo.
Devuelve true o false.Booleanos primitivos son true y false.
*/

function booWho(bool) {
  if(typeof(bool) === "boolean"){
    return true;
  }
  else if(typeof(bool) != "boolean"){
    return false;
  }
}
booWho(null);
