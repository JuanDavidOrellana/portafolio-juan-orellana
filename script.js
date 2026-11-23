document.addEventListener("DOMContentLoaded", () => {
    // Menú adaptable
    const botonMenu = document.querySelector(".menu-toggle");
    const navegacion = document.querySelector(".main-nav");

    if (botonMenu && navegacion) {
        botonMenu.addEventListener("click", () => {
            const menuAbierto = botonMenu.getAttribute("aria-expanded") === "true";

            botonMenu.setAttribute("aria-expanded", String(!menuAbierto));
            navegacion.classList.toggle("is-open", !menuAbierto);
            navegacion.classList.toggle("active", !menuAbierto);
        });

        navegacion.querySelectorAll("a").forEach((enlace) => {
            enlace.addEventListener("click", () => {
                botonMenu.setAttribute("aria-expanded", "false");
                navegacion.classList.remove("is-open", "active");
            });
        });
    }

    // Formulario: muestra el aviso y vuelve al inicio al aceptarlo.
    const formulario = document.querySelector("#contact-form");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();

            if (!formulario.reportValidity()) {
                return;
            }

            formulario.reset();

            // El dominio del aviso lo coloca automáticamente el navegador.
            alert("Gracias por tu Mensaje");

            // Esto ocurre cuando se pulsa "Aceptar".
            window.location.hash = "#inicio";
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Año automático en el pie de página
    const anio = document.querySelector("#year");

    if (anio) {
        anio.textContent = new Date().getFullYear();
    }
});