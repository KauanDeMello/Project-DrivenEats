let titleFood;
let titleDrinks;
let titleDesserts;

let priceFood, priceDrinks, priceDesserts, total



function OptionFood(element){

    const click = document.querySelector('.food .select');

    if(click !== null){
        click.classList.remove('select')
    }

    element.classList.add('select');

    titleFood = element.querySelector('.title').innerHTML;
    priceFood = element.querySelector('.price').innerHTML;
    priceFood = convertprice(priceFood);

    order();

}
function OptionDrinks(element){

    const click = document.querySelector('.drinks .select');

    if(click !== null){
        click.classList.remove('select')
    }

    element.classList.add('select')

    titleDrinks = element.querySelector('.title').innerHTML;
    priceDrinks = element.querySelector('.price').innerHTML;
    priceDrinks = convertprice(priceDrinks);

    order();
    
}
function OptionDesserts(element){

    const click = document.querySelector('.desserts .select');

    if(click !== null){
        click.classList.remove('select')
    }

    element.classList.add('select')

    titleDesserts = element.querySelector('.title').innerHTML;
    priceDesserts = element.querySelector('.price').innerHTML;
    priceDesserts = convertprice(priceDesserts);

    order();
}

function convertprice (pricenumber) {

    let price = pricenumber.replace("R$ ","");
    price = price.replace(",", ".");        
    price = Number(price) * 100;

    return price;
}

function order(){
    if (titleFood !== undefined) {
        if (titleDrinks !== undefined) {
            if (titleDesserts !== undefined) {
                const orderbutton = document.querySelector('.ordering');

                orderbutton.classList.add('on');
                orderbutton.innerHTML = 'Fechar pedido'
            }
        }
    } 
}
function sendorder () {

    
    if (titleFood !== undefined && titleDrinks !== undefined && titleDesserts !== undefined){


        const overlay = document.querySelector('.overlay');


        overlay.querySelector('.food .name').innerHTML = titleFood;
        overlay.querySelector('.dish .price').innerHTML = (priceFood / 100).toFixed(2);

        overlay.querySelector('.drink .name').innerHTML = titleDrinks;
        overlay.querySelector('.drink .price').innerHTML = (priceDrinks / 100).toFixed(2);


        overlay.querySelector('.dessert .name').innerHTML = tituloSobremesa;
        overlay.querySelector('.dessert .price').innerHTML = (priceDesserts / 100).toFixed(2);

        total = priceFood, priceDrinks, priceDesserts;
        overlay.querySelector('.total .price-total').innerHTML = `R$ ${(total / 100).toFixed(2)}`;

        overlay.classList.remove('.hidden');
    }
 
}

function canceloverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('hidden');
}

function sendorder () {

    let msg = `Olá, gostaria de fazer o pedido:
    - Prato: ${titleFood}
    - Bebida: ${titleDrinks}
    - Sobremesa: ${titleDesserts}
    Total: R$ ${(total / 100).toFixed(2)}
    `

    msg = encodeURIComponent(msg);

    const numeroAtendimento = '51995713945'
    const linkZapvac = `https://wa.me/${numeroAtendimento}?text=${msg}`
    window.open(linkZapvac);
}