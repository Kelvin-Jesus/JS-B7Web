let telefone = '5956';

console.log( telefone.padEnd(9, '*') );
console.log( telefone.padStart(9, '*') );

let cartao = '1234123412341234';

let lastD = cartao.slice(-4);

console.log('Este é seu cartão? '+lastD.padStart(12, '*'))