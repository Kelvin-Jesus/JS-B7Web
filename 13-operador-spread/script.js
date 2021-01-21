let numeros = [1,2,3,4];

let outros = [...numeros,5,6,7,8];

console.log(outros)


let info = {
    nome: 'Kelvin',
    sobrenome: 'Avelino Cambiaghi',
    idade: 90
}

let novaInfo = {
    ...info,
    cidade: 'Maringá',
    estado: 'Paraná',
    região: 'Sul',
    país: 'Brasil'
}

console.log(novaInfo)


function addInfo(info) {
    let novasInfo = {
        ...info,
        status: 0,
        token: 'agj403mng03h84jg9w38',
        data_cadastro: '2020-01-01'
    }

    return novasInfo;
}

console.log(addInfo({nome:'Kelvin', sobrenome:'Avelino Cambiaghi'}))
