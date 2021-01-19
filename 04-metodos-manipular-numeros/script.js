let n = 10;
let n1 = 10.5474959048;
let n2 = '25';
let n3 = '25.7';

let res = n.toString();
// transforma um valor da varíavel em string


let res2 = 'R$ '+n1.toFixed(2);
// retorna o valor númerico mas com a quantidade de casas decimais passadas no argumento


let res3 = parseInt(n2) + 5;
let res4 = parseFloat(n3) + 5;
//transforma o argumento passado em um valor inteiro ou float


console.log( res );
console.log( res2 );
console.log( res3 );
console.log( res4 );