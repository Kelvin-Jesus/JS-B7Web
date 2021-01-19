let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
let lista2 = ['Prato', 'Liquidificador', 'Forno'];

let res = lista.splice(1, 1);
// Primeiro argumento define o indíce do item a ser removido e o segundo define quantos itens serão removidos apartir do primeiro argumento, nom fim, retorna o item removido


let res2 = lista.concat(lista2);


let res3 = lista.sort();
res3.reverse();
// Organiza em ordem afabética os itens do array, usando a func. reverse() inverter a ordem





console.log(res);
console.log(res2);
console.log(res3);