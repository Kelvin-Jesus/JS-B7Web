let d = new Date();

d.setFullYear(2022)
// muda o ano da váriavel d

d.setMonth(11)
// muda o mês para dezembro

d.setDate(d.getDate() + 5)
// seta o dia mais a quantidade de dias passado no argumento


d.setHours(d.getHours() + 160)
// seta a hora mais a quantidade de horas passado no argumento


let nv = d;
console.log( 'Data:',nv ); 
