let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

let res = lista.toString();
//Pega cada item do array e junta em uma string separados por virgula


let res1 = lista.join('\n');
// Pega cada item do array e junta em uma string separados pelo caractere passado como argumento


let res2 = lista.indexOf('Corante');
// Retorna a posição do argumento dentro do array, retorna -1 caso não exista


// lista.pop();
// lista.shift();
// Remove o primeiro e o último item do array repectivamente


lista.push('Prato');
// Adiciona o arguemtno passado, na útlima posição do array

console.log(lista);
console.log(res);
console.log(res1);
console.log(res2);