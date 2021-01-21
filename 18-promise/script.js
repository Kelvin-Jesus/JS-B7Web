function fazer() {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('ok')
        },3000);
    });

    return promise;
}

fazer()
.then((resp)=>{
    console.log(resp)
})