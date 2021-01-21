let d = new Date();

let nv = d.getFullYear();
// retorna o ano


let nv1 = d.getMonth();
// retorna o mês começando em 0


let nv2 = d.getDay();
// retorna o dia em número começando do 0(Domingo)


let nv3 = d.getDate();
// retorna o dia da semana

let nv4 = d.getHours();
let nv5 = d.getMinutes();
let nv6 = d.getSeconds();

let nv7 = d.getTime()
// retorna os segundos desde 1970


let nv8 = Date.now();
// retorna o timeStamp atual sem preciar da Classe Date()

console.log( 'Ano:',nv ); // 2021
console.log( 'Mês:',nv1 ); // 0
console.log( 'DiaN:',nv2 ); // 3
console.log( 'DiaM:',nv3 ); // 20
console.log( 'Hora:',nv4 ); // 10
console.log( 'Minuto:',nv5 ); // 9
console.log( 'Segundo:',nv6 ); // 30
console.log( 'Segundos1970:',nv7 ); // ...
console.log( 'Now:',nv8 ); // ...