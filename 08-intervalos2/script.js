let timer;
function start(){
    
    timer = setTimeout(()=>{
        document.querySelector('body').innerHTML += 'Oi ';
    }, 2000);
}

function stop() {
    clearTimeout(timer);
}