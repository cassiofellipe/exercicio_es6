function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

const funcaoMuitoPesadaPromose = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
        execucoes++;
        }
        resolve (execucoes);
    } catch(e) {
        reject ('Deu erro na interação dos números')
    }
})

console.log("Inicio")
// console.log(funcaoMuitoPesada());
funcaoMuitoPesadaPromise.then(resultado => console.log(resultado))

console.log("Fim")


