let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.map((item)=>{
    return item * 2;
});

lista2 = lista2.filter((item)=>{
    if(item < 20){
        return true;
    } else {
        return false;
    }
});


lista2 = lista.every((item)=>{
    if (item > 20) {
        return true;
    } else {
        return false;
    }
})


lista2 = lista.some((item)=>(item>20)?true:false)

let res = lista2;

console.log(res);