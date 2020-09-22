const temaOscuro = document.getElementById('temaOscuro');
const temaRetro = document.getElementById('temaRetro');
const container = document.getElementById('container');
const nav = document.getElementById('nav');
const navA = document.getElementById('navA');
const a1 = document.getElementById('a1');
const b2 = document.getElementById('b2');
const c3 = document.getElementById('c3');
const d4 = document.getElementById('d4');
const e5 = document.getElementById('e5');
const f6 = document.getElementById('f6');
const g7 = document.getElementById('g7');
const h8 = document.getElementById('h8');
const i9 = document.getElementById('i9');
const calc = document.getElementById('calc');
const j0 = document.getElementById('j0');
const reset = document.getElementById('reset');
const footer = document.getElementById('footer');

const letras = document.getElementById('letras');
const numeros = document.getElementById('numeros');

temaOscuro.addEventListener('click', () => {
    container.classList.add('bg-dark');
    container.classList.add('text-white');
    nav.classList.add('shadow2');
    nav.classList.add('navbar-dark');
})

temaRetro.addEventListener('click', () => {
    container.classList.add('retro');
    container.classList.add('text-retro');
    navA.classList.add('text-retro');
    a1.classList.add('bt-retro');
    b2.classList.add('bt-retro');
    c3.classList.add('bt-retro');
    d4.classList.add('bt-retro');
    e5.classList.add('bt-retro');
    f6.classList.add('bt-retro');
    g7.classList.add('bt-retro');
    h8.classList.add('bt-retro');
    i9.classList.add('bt-retro');
    calc.classList.add('bt-retro');
    j0.classList.add('bt-retro');
    reset.classList.add('bt-retro');
    footer.classList.add('bt-retro');
})


a1.addEventListener('click', () => {
    letras.value = 'A'
});

b2.addEventListener('click', () => {
    letras.value = 'B'
})