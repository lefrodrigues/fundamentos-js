const pessoas = { 
    nome: 'Ana',
    idade: 5,
    endereço:{
        logradouro: 'Rua ABC', 
        numero: 1000
    }
}

const {nome, idade} = pessoas
console.log(nome, idade)

const {nome: n, idade: i} = pessoas
console.log(n, i)


const {sobrenome, bemHumorada = true } = pessoas
console.log(sobrenome, bemHumorada)

const {endereço:{logradouro, numero, cep }} = pessoas
console.log (logradouro, numero, cep)