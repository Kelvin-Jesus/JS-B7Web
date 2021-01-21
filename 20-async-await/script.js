function req() {

    const url = 'https://alunos.b7web.com.br/api/ping';
    const params = {
        method:'POST',
        body:JSON.stringify({nome:'kj',idade:90})
    }
    let f = fetch(url, params)
    .then(resp=>resp.json())
    .then(b=>console.log(b))
}

async function req2() {
    const url = 'https://alunos.b7web.com.br/api/ping';
    const params = {
        method:'POST',
        body:JSON.stringify({nome:'kj',idade:90})
    }

    const r = await fetch(url, params);
    const json = await r.json();
    console.log(json);
}


req()
req2()