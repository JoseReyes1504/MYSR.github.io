
const overlay = document.getElementById("overlay");
let imagenActiva = null;

document.querySelectorAll("#FormatoIMG").forEach(img => {
  img.addEventListener("click", e => {
    e.stopPropagation();

    if (imagenActiva) return;

    imagenActiva = img.parentElement;

    imagenActiva.dataset.left = imagenActiva.style.left;
    imagenActiva.dataset.top = imagenActiva.style.top;
    imagenActiva.dataset.transform = imagenActiva.style.transform;

    imagenActiva.classList.add("img-focus");
    overlay.classList.add("activo");
  });
});

/* Cerrar al tocar fuera */
overlay.addEventListener("click", () => {
  if (!imagenActiva) return;

  imagenActiva.classList.remove("img-focus");

  imagenActiva.style.left = imagenActiva.dataset.left;
  imagenActiva.style.top = imagenActiva.dataset.top;
  imagenActiva.style.transform = imagenActiva.dataset.transform;

  imagenActiva = null;
  overlay.classList.remove("activo");
});
