"use strict";

var alunos = [{
  nome: ' Alice',
  nota: 7
}, {
  nome: ' Bob',
  nota: 5
}, {
  nome: ' Carlos',
  nota: 8
}, {
  nome: ' Diana',
  nota: 4
}, {
  nome: ' Eva',
  nota: 6
}];
function alunosAprovados(arrayDeAlunos) {
  return arrayDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);