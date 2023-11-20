"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho o perfil na Rede Social: ".concat(redesSociais[i]));
}

//ForEach
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho o perfil na Rede Social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Cássio', 'Láiza', 'Wagner'];

//Map
var alunos2 = alunos.map(function (item) {
  return {
    nome: item,
    curso: 'Frontend'
  };
});
console.log(alunos2);

//Find
var laiza = alunos2.find(function (item) {
  return item.nome == 'Láiza';
});
console.log(laiza);

//FindIndex
var indiceDaLaiza = alunos2.findIndex(function (item) {
  return item.nome == 'Láiza';
});
console.log(indiceDaLaiza);

//Push
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});

//Every
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend'; // true ou false
});

console.log(todosAlunosSaoDeFrontend);

//some
var exiteAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend'; // Alguns ou Alguma coisa
});

console.log(exiteAlgumAlunoDeBackend);
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}

//Filter
var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);

//Reduce
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, item) {
  acumulador += item;
  return acumulador;
}, 0);
console.log(soma);

//Outro modelo - Esse é um modelo antigo.
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);

//Reduce - Pesquisa os nomes ou conteudo dentro em uma Arrays
var nomesDosAlunos = alunos2.reduce(function (acumulador, item) {
  acumulador += "".concat(item.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);

// const numeros = [1, 2, 3, 4, 5];
// const dobroDosNumeros = numeros.map(function(numeroAtual){    
//     return numeroAtual * 2;
// })

// console.log(dobroDosNumeros)