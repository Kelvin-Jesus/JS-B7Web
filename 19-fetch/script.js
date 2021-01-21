const url = 'https://alunos.b7web.com.br/api/ping';
const params = {
    method:'POST',
    body:JSON.stringify({nome:'kj',idade:90})
}
let f = fetch(url, params)
.then(resp=>resp.json())
.then(b=>console.log(b))