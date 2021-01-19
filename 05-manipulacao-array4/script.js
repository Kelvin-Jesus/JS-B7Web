let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.find((item)=>(item<20)?true:false)
lista2 = lista.findIndex((item)=>(item<20)?true:false)

let res = lista2;

console.log(res);