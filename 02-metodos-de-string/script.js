let nome = 'Kelvin Jesus Avelino Cambiaghi';

let resultado = nome.slice(0, 20);
// retorna uma srting com a quantidade de caracteres indicados no argumento, sendo o primeiro, obrigatório!

// Também aceita valores negativos, assim comçando pelo fim da string

let resultado2 = nome.substring(0, 20);
// Faz o mesmo que o slice mas não aceita valores negativos


let resultado3 = nome.substr(5, 20);
// Diferente das outras duas funções, no primeiro argumento é onde irá iniciar e o segundo é quantidade de caracteres que irá pegar


console.log( resultado );
console.log( resultado2 );
console.log( resultado3 );
