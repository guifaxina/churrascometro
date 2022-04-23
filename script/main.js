// Carne 400gr por perssoa +6h = 600gr
// Cerveja 1200ml por pessoa +6h = 2000ml
// Refrigerante 1000ml por pessoa +6h = 1500ml

// criancas = 0,5 pessoa

const calcular = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');
const adultos = document.querySelector('#adultos');
const crianca = document.querySelector('#criancas');
const tempo = document.querySelector('#tempo');
calcular.addEventListener('click', comidaNecessaria)

let carne;
let cerveja;
let refrigerante;

function comidaNecessaria () {
    if (tempo.value >= '6') {
        carne = 600;
        cerveja = 2000;
        refrigerante = 1500;
    } else {
        carne = 400;
        cerveja = 1200;
        refrigerante = 1000;
    }
    let criancas = crianca.value * 0.5;
    let carneCrianca = criancas * carne;
    let carneAdultos = adultos.value * carne;
    let carneTotal = (carneCrianca + carneAdultos) / 1000;
    
    let cervejaTotal = adultos.value * cerveja / 1000;

    let refriAdultos = adultos.value * refrigerante;
    let refriCrianca = criancas * refrigerante;
    let refriTotal = (refriAdultos + refriCrianca) / 1000;

    resultado.innerHTML =  `Você vai ter que comprar ${carneTotal}Kg de carne <br>
                            Você vai ter que comprar ${cervejaTotal}L de cerveja <br>
                            Você vai ter que comprar ${refriTotal}L de refrigerante`;
};
