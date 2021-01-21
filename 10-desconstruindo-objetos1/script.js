let pessoa = {
    nome: 'Kelvin Jesus',
    sobrenome: 'Avelino Cambiaghi',
    idade: 90,
    social: {
        github:'kj',
        instagram:'kj'
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

let { nome, sobrenome, idade = 0 } = pessoa;

console.log(nome, sobrenome, idade)


console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)
console.log(pessoa.social)
console.log(pessoa.social.github)
console.log(pessoa.social.instagram)
console.log(pessoa.nomeCompleto())