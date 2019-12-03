/****** data

let itemsInCart = 0;

/****** FUNCTIONS 

function addItemsToTheCart(cart, qty) {

    console.log('you added ${qty} items(s). There are now: ${curr + qty}.');
    return curry + qty
    return quote
    
}

/****** INFORMATION


    itemsInCart = addItemsToTheCart (itemsInCart, 1);
    itemsInCart = addItemsToTheCart (itemsInCart, 5);

    ******/


/****** Class 14  1  




const products = [
{ //1
    const prod0 = 
    name: 'Glass pro 0',
    price: 2999.95
    qty: 10
}, { //2
    name: 'Glass pro 1',
    price: 1599.95
    qty: 5

}, { //3
    name: 'Glass pro 2',
    price: 999.95
    qty: 15
}
]


console.log (checking message world)



const color = [
    'Apple'
    'Orange'
    'Pear'
]

const numbers [
2,
3,
4,
5,
6  
]

******/

/****** Class 14  1  ******/

//DATA

const countries = [
    'Canada',
    'Japan',
    'Brazil',
    'England',
    'France'
];

//FUNCTIONALITY

function getHtmlFromCountry (nameOfCountry) {
    return `<li class="country"> ${nameOfCountry}</li>`
}

//EXECUTION
const arrCountriesHtml = countries.map(getHtmlFromCountry);
const arrCountriesHtml = arrCountriesHtml.join('');
document.getElementById(`visited`).innerHTML = strCountriesHtml;