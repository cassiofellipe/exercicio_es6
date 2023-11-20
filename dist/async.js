"use strict";

function funcaoMuitoPesada() {
  var execucoes = 0;
  for (var i = 0; i < 1000000000; i++) {
    execucoes++;
  }
  return execucoes;
}
var funcaoMuitoPesadaPromose = new Promise(function (resolve, reject) {
  try {
    var execucoes = 0;
    for (var i = 0; i < 1000000000; i++) {
      execucoes++;
    }
    resolve(execucoes);
  } catch (e) {
    reject('Deu erro na interação dos números');
  }
});
console.log("Inicio");
// console.log(funcaoMuitoPesada());
funcaoMuitoPesadaPromise.then(function (resultado) {
  return console.log(resultado);
});
console.log("Fim");