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

// Crear array con el contenido de los botones
let arrayGeneral = [];

// Llenar array
arrayGeneral.push(a1, b2, c3, d4, e5, f6, g7, h8, i9, j0);

// contador para validar las letras ya ingresadas
let cont = 0;

// contador para validar los números ya ingresados
let contN = 0;

// Añadiendo eventos al teclado
// Letras
A1.addEventListener('click', () => {

    if (cont == 0) {
        letras.value = arrayGeneral[0][0];
        cont++;
    } else if (cont <= 1) {
        alert('La letra ' + arrayGeneral[0][0] + ' ya fue ingresada, por favor ingrese la letra siguiente');
    } else if (cont > 1) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }


});

B2.addEventListener('click', () => {

    if (cont < 1) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 1) {
        letras.value += arrayGeneral[1][0];
        cont++;
    } else if (cont == 2) {
        alert('La letra ' + arrayGeneral[1][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 2) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})

C3.addEventListener('click', () => {

    if (cont < 2) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 2) {
        letras.value += arrayGeneral[2][0];
        cont++;
    } else if (cont == 3) {
        alert('La letra ' + arrayGeneral[2][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 3) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})

D4.addEventListener('click', () => {

    if (cont < 3) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 3) {
        letras.value += arrayGeneral[3][0];
        cont++;
    } else if (cont == 4) {
        alert('La letra ' + arrayGeneral[3][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 4) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})
E5.addEventListener('click', () => {

    if (cont < 4) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 4) {
        letras.value += arrayGeneral[4][0];
        cont++;
    } else if (cont == 5) {
        alert('La letra ' + arrayGeneral[4][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 5) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})
F6.addEventListener('click', () => {

    if (cont < 5) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 5) {
        letras.value += arrayGeneral[5][0];
        cont++;
    } else if (cont == 6) {
        alert('La letra ' + arrayGeneral[5][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 6) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})

G7.addEventListener('click', () => {

    if (cont < 6) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 6) {
        letras.value += arrayGeneral[6][0];
        cont++;
    } else if (cont == 7) {
        alert('La letra ' + arrayGeneral[6][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 7) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})
H8.addEventListener('click', () => {

    if (cont < 7) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 7) {
        letras.value += arrayGeneral[7][0];
        cont++;
    } else if (cont == 8) {
        alert('La letra ' + arrayGeneral[7][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 8) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }
})
I9.addEventListener('click', () => {

    if (cont < 8) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 8) {
        letras.value += arrayGeneral[8][0];
        cont++;
    } else if (cont == 9) {
        alert('La letra ' + arrayGeneral[8][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 9) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})

J0.addEventListener('click', () => {

    if (cont < 9) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 9) {
        letras.value += arrayGeneral[9][0];
        cont++;
    } else if (cont == 10) {
        alert('La letra ' + arrayGeneral[9][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 10) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})

// Números
A1.addEventListener('click', () => {

    if (cont == 0) {
        numeros.value = arrayGeneral[0][0];
        cont++;
    } else if (cont <= 1) {
        alert('La letra ' + arrayGeneral[0][0] + ' ya fue ingresada, por favor ingrese la letra siguiente');
    } else if (cont > 1) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }


});

B2.addEventListener('click', () => {

    if (cont < 1) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 1) {
        numeros.value += arrayGeneral[1][0];
        cont++;
    } else if (cont == 2) {
        alert('La letra ' + arrayGeneral[1][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 2) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})

C3.addEventListener('click', () => {

    if (cont < 2) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 2) {
        numeros.value += arrayGeneral[2][0];
        cont++;
    } else if (cont == 3) {
        alert('La letra ' + arrayGeneral[2][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 3) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})

D4.addEventListener('click', () => {

    if (cont < 3) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 3) {
        numeros.value += arrayGeneral[3][0];
        cont++;
    } else if (cont == 4) {
        alert('La letra ' + arrayGeneral[3][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 4) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})
E5.addEventListener('click', () => {

    if (cont < 4) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 4) {
        numeros.value += arrayGeneral[4][0];
        cont++;
    } else if (cont == 5) {
        alert('La letra ' + arrayGeneral[4][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 5) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})
F6.addEventListener('click', () => {

    if (cont < 5) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 5) {
        numeros.value += arrayGeneral[5][0];
        cont++;
    } else if (cont == 6) {
        alert('La letra ' + arrayGeneral[5][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 6) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})

G7.addEventListener('click', () => {

    if (cont < 6) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 6) {
        numeros.value += arrayGeneral[6][0];
        cont++;
    } else if (cont == 7) {
        alert('La letra ' + arrayGeneral[6][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 7) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})
H8.addEventListener('click', () => {

    if (cont < 7) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 7) {
        numeros.value += arrayGeneral[7][0];
        cont++;
    } else if (cont == 8) {
        alert('La letra ' + arrayGeneral[7][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 8) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }
})
I9.addEventListener('click', () => {

    if (cont < 8) {
        alert('Por favor ingrese las letras en orden');
    } else if (cont == 8) {
        numeros.value += arrayGeneral[8][0];
        cont++;
    } else if (cont == 9) {
        alert('La letra ' + arrayGeneral[8][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
    } else if (cont > 9) {
        alert('Esta letra no es permitida porque ya fue ingresada')
    }

})

J0.addEventListener('click', () => {

        if (cont < 9) {
            alert('Por favor ingrese las letras en orden');
        } else if (cont == 9) {
            numeros.value += arrayGeneral[9][0];
            cont++;
        } else if (cont == 10) {
            alert('La letra ' + arrayGeneral[9][0] + ' ya fue ingresada, por favor ingrese la letra siguiente')
        } else if (cont > 10) {
            alert('Esta letra no es permitida porque ya fue ingresada')
        }

    })
    // cambia a tema oscuro

temaOscuro.addEventListener('click', () => {
    container.classList.remove('retro');
    container.classList.remove('text-retro');
    navA.classList.remove('text-retro');
    a1.classList.remove('bt-retro');
    b2.classList.remove('bt-retro');
    c3.classList.remove('bt-retro');
    d4.classList.remove('bt-retro');
    e5.classList.remove('bt-retro');
    f6.classList.remove('bt-retro');
    g7.classList.remove('bt-retro');
    h8.classList.remove('bt-retro');
    i9.classList.remove('bt-retro');
    calc.classList.remove('bt-retro');
    j0.classList.remove('bt-retro');
    reset.classList.remove('bt-retro');
    footer.classList.remove('bt-retro');

    container.classList.add('bg-dark');
    container.classList.add('text-white');
    nav.classList.add('shadow2');
    nav.classList.add('navbar-dark');

    localStorage.setItem('tema', 'temaOscuro');
})


// cambia a tema retro
temaRetro.addEventListener('click', () => {
    container.classList.remove('bg-dark');
    container.classList.remove('text-white');
    nav.classList.remove('shadow2');
    nav.classList.remove('navbar-dark');


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

    localStorage.setItem('tema', 'temaRetro');
})

const temaEnStorage = () => {
    const temaGuardado = localStorage.getItem('tema');
    // console.log(temaGuardado);
    if (temaGuardado == 'temaOscuro') {
        container.classList.add('bg-dark');
        container.classList.add('text-white');
        nav.classList.add('shadow2');
        nav.classList.add('navbar-dark');
    } else if (temaGuardado == 'temaRetro') {
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
    }
}
temaEnStorage();