"use strict";
let numeroSecreto = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let puntuacionMasAlta = 0;
const mensaje = function (mensaje) {
  document.querySelector(".mensaje").textContent = mensaje;
};
const puntos = function (puntoss) {
  document.querySelector(".score").textContent = puntoss;
};
document.querySelector(".check").addEventListener("click", function () {
  const adivinar = Number(document.querySelector(".adivinar").value);
  console.log(adivinar, typeof adivinar);
  if (!adivinar) {
    mensaje("Por favor elige un numero!");
  } else if (adivinar === numeroSecreto) {
    mensaje("Felicitaciones, adivinaste mi numero!");
    document.querySelector(".numero").textContent = numeroSecreto;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".numero").style.width = "30rem";

    if (score > puntuacionMasAlta) {
      puntuacionMasAlta = score;
      document.querySelector(".puntuacionMasAlta").textContent =
        puntuacionMasAlta;
    }
  } else if (adivinar !== numeroSecreto) {
    if (score > 1) {
      mensaje(
        adivinar > numeroSecreto
          ? "El numero que elejiste es muy grande"
          : "El numero que elejiste es muy chico"
      );
      score--;
      puntos(score);
    } else {
      mensaje("Perdiste el juego");
      puntos(0);
    }
  }
  document.querySelector(".otraVez").addEventListener("click", function () {
    score = 10;
    numeroSecreto = Math.trunc(Math.random() * 20) + 1;
    mensaje("Comenzar...");
    puntos(score);
    document.querySelector(".numero").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".adivinar").value = "";
    document.querySelector(".numero").style.width = "15rem";
  });
});
