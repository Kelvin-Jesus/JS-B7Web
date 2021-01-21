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

let { nome, sobrenome, idade = 0, social:{ instagram } } = pessoa;

console.log(nome, sobrenome, idade, instagram)

let { github } = pessoa.social;

console.log(github, instagram);

