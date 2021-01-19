let nome = 'Kelvin Jesus Avelino Cambiaghi';

let resultado = nome.replace('Avelino', 'Jesus');
// retorna uma string substituindo o primeiro argumento pelo segundo
// Só sobstitui no primeiro local que encontrar.

let resultado2 = nome.toUpperCase();
let resultado3 = nome.toLowerCase();
// Todas as letras para maiúsculas e para minúsculas

let nome2 = '     Kelvin     ';

let resultado4 = nome2.trim();
// remove espaços em branco de uma string

let resultado5 = nome.charAt(2);
let resultado6 = nome[2];
// Retorna o caractere que está no posição passada no argumento


let resultado7 = nome.split(' ');
// retorna um array baseado na string nome e separada pelo caractere passado no argumento

console.log( resultado );
console.log( resultado2 );
console.log( resultado3 );
console.log( resultado4 );
console.log( resultado5 );
console.log( resultado6 );
console.log( resultado7 );

