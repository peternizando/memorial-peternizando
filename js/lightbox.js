/*
====================================================

Arquivo.....: lightbox.js

Projeto.....: Memorial Peternizando

Release.....: 1.2.0

Descrição...:
Controla a abertura e o fechamento do
Lightbox das Recordações.

====================================================
*/

/*
====================================================
ELEMENTOS
====================================================
*/

const lightbox =
    document.getElementById("lightbox");

const imagemLightbox =
    document.getElementById("imagemLightbox");

const fecharLightbox =
    document.getElementById("fecharLightbox");

/*
====================================================
ABRIR LIGHTBOX
====================================================
*/

function abrirLightbox(imagem) {

    if (!lightbox || !imagemLightbox) {

        return;

    }

    imagemLightbox.src =
        imagem.src;

    imagemLightbox.alt =
        imagem.alt;

    lightbox.classList.add("aberto");

}

/*
====================================================
FECHAR LIGHTBOX
====================================================
*/

function fecharLightboxModal() {

    if (!lightbox) {

        return;

    }

    lightbox.classList.remove("aberto");

    imagemLightbox.src = "";

}

/*
====================================================
EVENTOS
====================================================
*/

if (fecharLightbox) {

    fecharLightbox.addEventListener(

        "click",

        fecharLightboxModal

    );

}

if (lightbox) {

    lightbox.addEventListener(

        "click",

        function (evento) {

            if (evento.target === lightbox) {

                fecharLightboxModal();

            }

        }

    );

}

document.addEventListener(

    "keydown",

    function (evento) {

        if (evento.key === "Escape") {

            fecharLightboxModal();

        }

    }

);

/*
====================================================
FUNÇÃO PÚBLICA

Será utilizada pelo galeria.js

abrirLightbox(imagem);

====================================================
*/

window.abrirLightbox = abrirLightbox;