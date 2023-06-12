window.onload = function() {
  //Lista de palabras en un array
  var first = ["mi ", "un "];
  var noun = ["perro ", "compañero "];
  var action = ["me mojó ", "me escondió ", "me rompió ", "me ensució "];
  var possetion = [
    "los zapatos ",
    "la chaqueta ",
    "el chaleco ",
    "el pantalón "
  ];
  var where = [
    "justo antes de salir de casa",
    "en el parque",
    "justo cuando venia llegando",
    "cuando iba camino a la escuela"
  ];

  // Declarando variables aleatorias
  var rdm1 = Math.floor(Math.random() * first.length);
  var rdm2 = Math.floor(Math.random() * noun.length);
  var rdm3 = Math.floor(Math.random() * action.length);
  var rdm4 = Math.floor(Math.random() * possetion.length);
  var rdm5 = Math.floor(Math.random() * where.length);

  //Creando una frase (la excusa)
  document.querySelector("#laexcusa").innerHTML =
    first[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5];
};
