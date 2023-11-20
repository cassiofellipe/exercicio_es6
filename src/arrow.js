const minmhaFuncao = () => "Diz Olá";

const retornaUmCarro = () => ({
    modelo: 'KA',
    fabricante: 'Ford'
})

console.log(minmhaFuncao())
console.log(retornaUmCarro())



const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    frear: () => {
        this.velocidadeAtual -= 10;
    }
}


carro.acelerar();
carro.frear();


console.log(carro.velocidadeAtual)