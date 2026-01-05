document.addEventListener("DOMContentLoaded", () => {

  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modalImg");

  let imagenActual = null;
  let listaImagenes = [];
  let indiceActual = 0;

  // seleccionar todas las imágenes del álbum
  listaImagenes = Array.from(document.querySelectorAll('img[id="FormatoIMG"]'));

  listaImagenes.forEach((img, index) => {
    img.style.cursor = "zoom-in";

    img.addEventListener("click", (e) => {
      e.stopPropagation();
      abrirModal(index);
    });
  });

  function abrirModal(index) {
    indiceActual = index;
    modal.innerHTML = "";

    imagenActual = document.createElement("img");
    imagenActual.src = listaImagenes[indiceActual].src;
    imagenActual.alt = listaImagenes[indiceActual].alt || "";

    modal.appendChild(imagenActual);

    overlay.classList.add("activo");
    modal.classList.add("activo");
  }

  function cerrarModal() {
    overlay.classList.remove("activo");
    modal.classList.remove("activo");
    modal.innerHTML = "";
    imagenActual = null;
  }

  function siguiente() {
    indiceActual = (indiceActual + 1) % listaImagenes.length;
    imagenActual.src = listaImagenes[indiceActual].src;
  }

  function anterior() {
    indiceActual =
      (indiceActual - 1 + listaImagenes.length) % listaImagenes.length;
    imagenActual.src = listaImagenes[indiceActual].src;
  }

  /* ===== EVENTOS ===== */

  overlay.addEventListener("click", cerrarModal);

  modal.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") cerrarModal();
  });

  document.addEventListener("keydown", (e) => {
    if (!imagenActual) return;

    if (e.key === "Escape") cerrarModal();
    if (e.key === "ArrowRight") siguiente();
    if (e.key === "ArrowLeft") anterior();
  });

  /* ===== SWIPE (MÓVIL) ===== */
  let startX = 0;

  modal.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  modal.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      diff > 0 ? siguiente() : anterior();
    }
  });

});
