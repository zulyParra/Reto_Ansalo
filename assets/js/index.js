// traer los inputs
let letras = document.getElementById('letras');
let numeros = document.getElementById('numeros');

// traer los botones switchs para cambiar tema
const temaOscuro = document.getElementById('temaOscuro');
const temaRetro = document.getElementById('temaRetro');

// traer elementos html para cambiar styles
const container = document.getElementById('container');
const nav = document.getElementById('nav');
const navA = document.getElementById('navA');
const footer = document.getElementById('footer');

// traer el contenido de los botones y convertirlo en array 
const a1 = document.getElementById('a1').innerHTML.split('-');
const b2 = document.getElementById('b2').innerHTML.split('-');
const c3 = document.getElementById('c3').innerHTML.split('-');
const d4 = document.getElementById('d4').innerHTML.split('-');
const e5 = document.getElementById('e5').innerHTML.split('-');
const f6 = document.getElementById('f6').innerHTML.split('-');
const g7 = document.getElementById('g7').innerHTML.split('-');
const h8 = document.getElementById('h8').innerHTML.split('-');
const i9 = document.getElementById('i9').innerHTML.split('-');
const j0 = document.getElementById('j0').innerHTML.split('-');

// traer botones para añadir evento
const A1 = document.getElementById('a1');
const B2 = document.getElementById('b2');
const C3 = document.getElementById('c3');
const D4 = document.getElementById('d4');
const E5 = document.getElementById('e5');
const F6 = document.getElementById('f6');
const G7 = document.getElementById('g7');
const H8 = document.getElementById('h8');
const I9 = document.getElementById('i9');
const J0 = document.getElementById('j0');
const calc = document.getElementById('calc');
const reset = document.getElementById('reset');

// Crear array con el contenido de los botones
let arrayGeneral = [];
arrayGeneral.push(a1, b2, c3, d4, e5, f6, g7, h8, i9, j0);

// contador para validar las letras ya ingresadas
let cont = 0;

// funciones
function alertInicial() {
    alert('Por favor ingrese los valores en orden');
}

function alertNoPermitido() {
    alert('Este valor no es permitido porque ya fue ingresado');
}

function btnA1() {
    if (cont == 0) {
        letras.value = arrayGeneral[0][0];
        numeros.value = arrayGeneral[0][1];
        cont++;
    } else if (cont >= 1) {
        alertNoPermitido();
    }
}

function btnB2() {
    if (cont < 1) {
        alertInicial();
    } else if (cont == 1) {
        letras.value += arrayGeneral[1][0];
        numeros.value += arrayGeneral[1][1];
        cont++;
    } else if (cont >= 2) {
        alertNoPermitido();
    }
}

function btnC3() {
    if (cont < 2) {
        alertInicial();
    } else if (cont == 2) {
        letras.value += arrayGeneral[2][0];
        numeros.value += arrayGeneral[2][1];
        cont++;
    } else if (cont >= 3) {
        alertNoPermitido();
    }
}

function btnD4() {
    if (cont < 3) {
        alertInicial();
    } else if (cont == 3) {
        letras.value += arrayGeneral[3][0];
        numeros.value += arrayGeneral[3][1];
        cont++;
    } else if (cont >= 4) {
        alertNoPermitido();
    }
}

function btnE5() {
    if (cont < 4) {
        alertInicial();
    } else if (cont == 4) {
        letras.value += arrayGeneral[4][0];
        numeros.value += arrayGeneral[4][1];
        cont++;
    } else if (cont >= 5) {
        alertNoPermitido();
    }
}

function btnF6() {
    if (cont < 5) {
        alertInicial();
    } else if (cont == 5) {
        letras.value += arrayGeneral[5][0];
        numeros.value += arrayGeneral[5][1];
        cont++;
    } else if (cont >= 6) {
        alertNoPermitido();
    }
}

function btnG7() {
    if (cont < 6) {
        alertInicial();
    } else if (cont == 6) {
        letras.value += arrayGeneral[6][0];
        numeros.value += arrayGeneral[6][1];
        cont++;
    } else if (cont >= 7) {
        alertNoPermitido();
    }
}

function btnH8() {
    if (cont < 7) {
        alertInicial();
    } else if (cont == 7) {
        letras.value += arrayGeneral[7][0];
        numeros.value += arrayGeneral[7][1];
        cont++;
    } else if (cont >= 8) {
        alertNoPermitido();
    }
}

function btnI9() {
    if (cont < 8) {
        alertInicial();
    } else if (cont == 8) {
        letras.value += arrayGeneral[8][0];
        numeros.value += arrayGeneral[8][1];
        cont++;
    } else if (cont >= 9) {
        alertNoPermitido();
    }
}

function btnJ0() {
    if (cont < 9) {
        alertInicial();
    } else if (cont == 9) {
        letras.value += arrayGeneral[9][0];
        numeros.value += arrayGeneral[9][1];
        cont++;
    } else if (cont >= 10) {
        alertNoPermitido();
    }
}

function colocarTemaOscuro() {
    container.classList.remove('retro');
    container.classList.remove('text-retro');
    navA.classList.remove('text-retro');
    A1.classList.remove('bt-retro');
    B2.classList.remove('bt-retro');
    C3.classList.remove('bt-retro');
    D4.classList.remove('bt-retro');
    E5.classList.remove('bt-retro');
    F6.classList.remove('bt-retro');
    G7.classList.remove('bt-retro');
    H8.classList.remove('bt-retro');
    I9.classList.remove('bt-retro');
    calc.classList.remove('bt-retro');
    J0.classList.remove('bt-retro');
    reset.classList.remove('bt-retro');
    footer.classList.remove('bt-retro');

    container.classList.add('bg-dark');
    container.classList.add('text-white');
    nav.classList.add('shadow2');
    nav.classList.add('navbar-dark');

    localStorage.setItem('tema', 'temaOscuro');
}

function colocarTemaRetro() {
    container.classList.remove('bg-dark');
    container.classList.remove('text-white');
    nav.classList.remove('shadow2');
    nav.classList.remove('navbar-dark');

    container.classList.add('retro');
    container.classList.add('text-retro');
    navA.classList.add('text-retro');
    A1.classList.add('bt-retro');
    B2.classList.add('bt-retro');
    C3.classList.add('bt-retro');
    D4.classList.add('bt-retro');
    E5.classList.add('bt-retro');
    F6.classList.add('bt-retro');
    G7.classList.add('bt-retro');
    H8.classList.add('bt-retro');
    I9.classList.add('bt-retro');
    calc.classList.add('bt-retro');
    J0.classList.add('bt-retro');
    reset.classList.add('bt-retro');
    footer.classList.add('bt-retro');

    localStorage.setItem('tema', 'temaRetro');
}

const temaEnStorage = () => {
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado == 'temaOscuro') {
        colocarTemaOscuro();
    } else if (temaGuardado == 'temaRetro') {
        colocarTemaRetro();
    }
}

// onClick

A1.onclick = function() {
    btnA1();
}

B2.onclick = function() {
    btnB2();
}

C3.onclick = function() {
    btnC3();
}

D4.onclick = function() {
    btnD4();
}
E5.onclick = function() {
    btnE5();
}
F6.onclick = function() {
    btnF6();
}
G7.onclick = function() {
    btnG7();
}
H8.onclick = function() {
    btnH8();
}
I9.onclick = function() {
    btnI9();
}
J0.onclick = function() {
    btnJ0();
}

temaOscuro.onclick = function() {
    colocarTemaOscuro();
}

temaRetro.onclick = function() {
    colocarTemaRetro();
}

temaEnStorage();