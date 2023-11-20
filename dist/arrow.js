"use strict";

var _this = void 0;
var minmhaFuncao = function minmhaFuncao() {
  return "Diz Olá";
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'KA',
    fabricante: 'Ford'
  };
};
console.log(minmhaFuncao());
console.log(retornaUmCarro());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    _this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);