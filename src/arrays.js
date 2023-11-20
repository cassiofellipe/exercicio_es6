const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho o perfil na Rede Social: ${redesSociais[i]}`)
}


//ForEach
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho o perfil na Rede Social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Cássio', 'Láiza', 'Wagner'];

//Map
const alunos2 = alunos.map(function(item) {
    return {
        nome: item,
        curso: 'Frontend'
    }    
})
console.log(alunos2)

//Find
const laiza = alunos2.find(function(item) {
    return item.nome == 'Láiza'
})
console.log(laiza);

//FindIndex
const indiceDaLaiza = alunos2.findIndex(function(item) {
    return item.nome == 'Láiza'
})
console.log(indiceDaLaiza);

//Push
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend', 
})

//Every
const todosAlunosSaoDeFrontend = alunos2.every(function(item){
    return item.curso === 'Frontend' // true ou false
})
console.log(todosAlunosSaoDeFrontend);

//some
const exiteAlgumAlunoDeBackend = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso === 'Frontend' // Alguns ou Alguma coisa
})
console.log(exiteAlgumAlunoDeBackend)


function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend';
}

//Filter
const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend)
console.log(alunosDeBackend);

//Reduce
const nums = [10, 20, 30 ,10]

const soma = nums.reduce(function(acumulador, item){
    acumulador += item;
    return acumulador;
}, 0)

console.log(soma);


//Outro modelo - Esse é um modelo antigo.
let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor)

//Reduce - Pesquisa os nomes ou conteudo dentro em uma Arrays
const nomesDosAlunos = alunos2.reduce(function(acumulador, item){
    acumulador += `${item.nome} `;
    return acumulador;
}, '')

console.log(nomesDosAlunos);



// const numeros = [1, 2, 3, 4, 5];
// const dobroDosNumeros = numeros.map(function(numeroAtual){    
//     return numeroAtual * 2;
// })

// console.log(dobroDosNumeros)