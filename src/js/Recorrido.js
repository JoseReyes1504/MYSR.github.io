import { ActualizarTutorial, ObtenerTuto } from "./db.js";

const btnAvanzar = document.getElementById("Avanzar");
const btnAvanzar2 = document.getElementById("Avanzar2");
const btnAtras = document.getElementById("Atras2");
const btnAtras3 = document.getElementById("Atras3");
const btnHome = document.getElementById("btnHome");

var Estilo = document.documentElement.style;
var Tutorial = false;

btnAvanzar.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "-100%");
});

btnAvanzar2.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "-200%");
});

btnAtras.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "0%");
});

btnAtras3.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "-100%");
});


btnHome.addEventListener("click", async () => {
    try{
        ActualizarTutorial("vt2lkjKSRSswW9bqLRqc", {
            Tuto: false,
        });
    }catch(err){
        console.log("hubo un error: " + err);
    }

    Tutorial = await ObtenerTuto("vt2lkjKSRSswW9bqLRqc");

    if (Tutorial.data().Tuto == false) {
        location.href = './Inicio.html';
    } else {
        location.href = './Recorrido.html';
    }
})