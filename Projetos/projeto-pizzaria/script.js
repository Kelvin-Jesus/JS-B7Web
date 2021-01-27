let modalQt = 1; // quantidade de pizza selecionadas
let cart = [];
let modlKey;

const qs = el=>document.querySelector(el);
// função para selecionar os itens de forma a digitar menos códigos
const qsA = el=>document.querySelectorAll(el);

// listagem das pizzas
pizzaJson.map((item, index)=>{
    //pega o itens de pizzaJson e mapeia, passando item e index como parametros para pegar as informações de cada item;

    
    // 1.Pega a div com a class pizza-item e clona ela: 
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);
    

    // 2.Verifica qual a pizza aberta no modal:
    pizzaItem.setAttribute('data-key', index);


    // 3.Preencher as informações: 

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    // Pega o o path de cada imagem e injeta no src


    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2).replace('.', ',')}`;
    // Pega o preço de cada pizza e formata para 2 digitos após a virgula


    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    // Pegou o nome de cada item do json e adicionou no html


    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    // Pega a descrição de cada pizza


    pizzaItem.querySelector('a').addEventListener('click', e=>{
    // Adicionou um evento de clique no a
        e.preventDefault(); // previniu o padrão de re-load

        // Anima o modal ao aparecer
        qs('.pizzaWindowArea').style.opacity = '0';
        qs('.pizzaWindowArea').style.display = 'flex';
        
        setTimeout(()=>{
            qs('.pizzaWindowArea').style.opacity = '1';
        }, 200);

        modalQt = 1;
        
        
        let key = e.target.closest('.pizza-item').getAttribute('data-key'); // pegou o att data-key da pizza clicada para preencher  o modal
        
        modalKey = key;

        qs('.pizzaBig img').src = pizzaJson[key].img;
        qs('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        qs('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        qs('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2).replace('.', ',')}`;


        qs('.pizzaInfo--size.selected').classList.remove('selected');
        //remove a seleção do item que já vem por padrão

        qsA('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2) {
                size.classList.add('selected');
                // Seleciona sempre o grande em outra pizza
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        })
        //Adicou os tamanho das pizzas.

        
        qs('.pizzaInfo--qt').innerHMTL = modalQt;
        // Adiciona a quantidade padrão ao modal


        // Fechar o modal com a animação
        closeModal;

    });
    

    qs('.pizza-area').append( pizzaItem );
    // Seleciona a div pizza-area e adiciona pizzaItem nela.
});

// Eventos do modal
function closeModal() {
    qs('.pizzaWindowArea').style.opacity = '0';
    
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    }, 800);

}

qsA('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton')
.forEach(item=>{
    item.addEventListener('click', closeModal);
})

qs('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    if(modalQt > 1){
        modalQt--;
        qs('.pizzaInfo--qt').innerHTML = modalQt;
    }
})

qs('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    modalQt++;
    qs('.pizzaInfo--qt').innerHTML = modalQt;

})

qsA('.pizzaInfo--size').forEach((size, sizeIndex)=>{
    size.addEventListener('click', (e)=>{
        qs('.pizzaInfo--size.selected').classList.remove('selected');
        //remove a seleção do item que já vem por padrão

        size.classList.add('selected');
    })
})

qs('.pizzaInfo--addButton').addEventListener('click', ()=>{
    // 1.Qual a pizza?
    // console.log('Pizza: '+modalKey);

    // 2.Qual o tamanho?
    let size = qs('.pizzaInfo--size.selected').getAttribute('data-key');
    console.log('tamanho: ' +size);
    size = parseInt(size);
    // 3.Quantos pizzas?
    // console.log('Quantidade: '+modalQt);

    let identifier = pizzaJson[modalKey].id+'@'+size;

    let key = cart.findIndex(item=>item.identifier == identifier)

    if(key > -1) {
        cart[key].qt += modalQt;
    } else {

        // 4.add Carrinho
        cart.push({
            identifier,
            id:pizzaJson[modalKey].id,
            size,
            qt:modalQt
        });
    }

    updateCart();
    closeModal();
    qs('.pizzaInfo--qt').innerHTML = 1;
})


qs('.menu-openner').addEventListener('click', ()=>{
    if(cart.length > 0) {
        qs('aside').style.left = '0';
    }
})

qs('.menu-closer').addEventListener('click', ()=>{
    qs('aside').style.left = '100vw';
})

function updateCart() {

    qs('.menu-openner span').innerHTML = cart.length;

    if (cart.length > 0) {
        qs('aside').classList.add('show');

        qs('.cart').innerHTML = '';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for(let i in cart) {

            let pizzaItem = pizzaJson.find((item)=>item.id == cart[i].id);
            subtotal += pizzaItem.price * cart[i].qt;

            let cartItem = qs('.models .cart--item').cloneNode(true);

            let pizzaSizeName;

            switch(cart[i].size) {
                case 0:
                    pizzaSizeName = 'P';
                    break;

                case 1:
                    pizzaSizeName = 'M';
                    break;

                case 2:
                    pizzaSizeName = 'G';
                    break;
            }

            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`
            qs('.cart').append(cartItem);

            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', ()=>{
                if(cart[i].qt > 1) {
                    cart[i].qt--;
                } else {
                    cart.splice(i, 1);
                }
                updateCart();
            });

            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', ()=>{
                cart[i].qt++;
                updateCart();
            })
            
        }

        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        qs('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        qs('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        qs('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;

    } else {
        qs('aside').classList.remove('show');
        qs('aside').style.left = '100vw';
    }
}