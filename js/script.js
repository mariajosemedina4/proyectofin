



//====================================================
//              JavaScript Academy
//                  script.js
//                  PARTE 1
//====================================================


//====================================================
//              CALCULADORA
//====================================================

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

function obtenerValores() {

    return {

        a: parseFloat(num1.value) || 0,

        b: parseFloat(num2.value) || 0

    };

}


const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
const btnMultiplicar = document.getElementById("multiplicar");
const btnDividir = document.getElementById("dividir");


if (btnSumar) {

    btnSumar.addEventListener("click", function () {

        const { a, b } = obtenerValores();

        resultado.textContent = a + b;

    });

}


if (btnRestar) {

    btnRestar.addEventListener("click", function () {

        const { a, b } = obtenerValores();

        resultado.textContent = a - b;

    });

}


if (btnMultiplicar) {

    btnMultiplicar.addEventListener("click", function () {

        const { a, b } = obtenerValores();

        resultado.textContent = a * b;

    });

}


if (btnDividir) {

    btnDividir.addEventListener("click", function () {

        const { a, b } = obtenerValores();

        if (b === 0) {

            resultado.textContent = "No se puede dividir entre 0";

        } else {

            resultado.textContent = (a / b).toFixed(2);

        }

    });

}




     


//====================================================
//          CERRAR MENÚ EN CELULAR
//====================================================

const enlaces = document.querySelectorAll(".nav-link");

enlaces.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        const menu = document.querySelector(".navbar-collapse");

        if (menu.classList.contains("show")) {

            const bsCollapse = new bootstrap.Collapse(menu, {

                toggle: false

            });

            bsCollapse.hide();

        }

    });

});



//====================================================
//      CONTINÚA EN LA PARTE 2
//====================================================

//====================================================
//          LABORATORIO JAVASCRIPT
//====================================================

const botonesLaboratorio = document.querySelectorAll(".lab-card button");

botonesLaboratorio.forEach(function (boton, indice) {

    boton.addEventListener("click", function () {

        switch (indice) {

            case 0:

                alert("💡 El foco fue encendido correctamente.");

                break;

            case 1:

                let numero = Math.floor(Math.random() * 100) + 1;

                alert("🎲 Número aleatorio: " + numero);

                break;

            case 2:

                let hora = new Date().toLocaleTimeString();

                alert("🕒 Hora actual: " + hora);

                break;

        }

    });

});



//====================================================
//          EFECTO EN TARJETAS
//====================================================

const tarjetas = document.querySelectorAll(

    ".tema, .beneficio, .dato, .evento, .timeline-card, .empresa-card, .tecnologia-card"

);

tarjetas.forEach(function (tarjeta) {

    tarjeta.addEventListener("mouseenter", function () {

        tarjeta.style.transform = "translateY(-8px)";

        tarjeta.style.transition = ".3s";

    });

    tarjeta.addEventListener("mouseleave", function () {

        tarjeta.style.transform = "translateY(0px)";

    });

});



//====================================================
//          BOTÓN "COMENZAR"
//====================================================

const botonComenzar = document.querySelector(".btn-warning");

if (botonComenzar) {

    botonComenzar.addEventListener("click", function () {

        console.log("El usuario comenzó el recorrido.");

    });

}



//====================================================
//          SCROLL SUAVE
//====================================================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



//====================================================
//          MENSAJE EN CONSOLA
//====================================================

console.log("JavaScript Academy cargado correctamente.");



//====================================================
//          FECHA ACTUAL
//====================================================

const fecha = new Date();

console.log(

    "Fecha:",

    fecha.toLocaleDateString(),

    "-",

    fecha.toLocaleTimeString()

);



//====================================================
//          CONTINÚA EN LA PARTE 3
//====================================================

//====================================================
//              EFECTO AL HACER SCROLL
//====================================================

const secciones = document.querySelectorAll("section");

function mostrarSecciones() {

    const alturaPantalla = window.innerHeight;

    secciones.forEach(function (seccion) {

        const posicion = seccion.getBoundingClientRect().top;

        if (posicion < alturaPantalla - 120) {

            seccion.style.opacity = "1";

            seccion.style.transform = "translateY(0px)";

            seccion.style.transition = "all .8s ease";

        }

    });

}

window.addEventListener("scroll", mostrarSecciones);

window.addEventListener("load", function () {

    secciones.forEach(function (seccion) {

        seccion.style.opacity = "0";

        seccion.style.transform = "translateY(40px)";

    });

    mostrarSecciones();

});



//====================================================
//          BOTÓN SUBIR ARRIBA
//====================================================

const botonArriba = document.createElement("button");

botonArriba.innerHTML = "⬆";

botonArriba.id = "btnArriba";

document.body.appendChild(botonArriba);

botonArriba.style.position = "fixed";

botonArriba.style.bottom = "20px";

botonArriba.style.right = "20px";

botonArriba.style.width = "50px";

botonArriba.style.height = "50px";

botonArriba.style.border = "none";

botonArriba.style.borderRadius = "50%";

botonArriba.style.background = "#F7DF1E";

botonArriba.style.cursor = "pointer";

botonArriba.style.fontSize = "20px";

botonArriba.style.display = "none";

botonArriba.style.boxShadow = "0 5px 15px rgba(0,0,0,.25)";

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        botonArriba.style.display = "block";

    } else {

        botonArriba.style.display = "none";

    }

});

botonArriba.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



//====================================================
//          MENSAJE DE BIENVENIDA
//====================================================

window.addEventListener("load", function () {

    console.log("===================================");

    console.log(" JavaScript Academy ");

    console.log(" Proyecto cargado correctamente ");

    console.log(" HTML + CSS + JavaScript ");

    console.log("===================================");

});








//====================================================
//      VALIDACIÓN DEL FORMULARIO
//====================================================






//====================================================
//          FIN DEL ARCHIVO
//====================================================

console.log("script.js cargado correctamente.");



/*====================================================
                    QUIZ
====================================================*/

const btnQuiz = document.getElementById("btnQuiz");

if (btnQuiz) {

    btnQuiz.addEventListener("click", function () {

        let puntos = 0;

        for (let i = 1; i <= 5; i++) {

            const respuesta = document.querySelector(`input[name="p${i}"]:checked`);

console.log("Pregunta", i, respuesta);

if (!respuesta) {
    alert("La pregunta " + i + " no tiene una respuesta seleccionada.");
    return;
}

puntos += Number(respuesta.value);
        }

        const resultado = document.getElementById("resultadoQuiz");

        let mensaje = "";

        if (puntos === 5) {
            mensaje = "🏆 ¡Excelente! Obtuviste 5 de 5.";
        } else if (puntos === 4) {
            mensaje = "👏 Muy bien. Obtuviste 4 de 5.";
        } else if (puntos === 3) {
            mensaje = "🙂 Buen trabajo. Obtuviste 3 de 5.";
        } else {
            mensaje = "📚 Sigue practicando.";
        }

        resultado.style.display = "block";
        resultado.innerHTML = `
            <h4>Puntuación final</h4>
            <h2>${puntos}/5</h2>
            <p>${mensaje}</p>
        `;
    });

}


