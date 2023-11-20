// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// }

// const pikachu = new Pokemon("Pukiachu", "Elétrico")

class Pokemon {
    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }
}

const pikachu = new Pokemon('pikachu', 'elétrico');
pikachu.atacar('Choque do Trovão')
// pikachu.nome = 'pikachu';
// pikachu.tipo = 'eletrico';

console.log(pikachu);