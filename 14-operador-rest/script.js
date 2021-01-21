// function add(...numero) {
//     console.log(numero)
// }

// add(5,7,4,6,8)
// add(7,5,3,7,23,67,74,6,7)

function add(nomes, ...novosNomes){
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ]
    return novoConjunto;
}

let nomes = ['Kelvin', 'Lorena'];
let outros = add(nomes, 'Garfield', 'Loreba', 'Lu');

console.log(outros);