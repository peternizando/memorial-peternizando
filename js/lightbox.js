/*
====================================================

Arquivo.....: lightbox.js

Projeto.....: Memorial Peternizando

Release.....: 1.4.0

Descrição...:
Controla o Lightbox das Recordações,
permitindo abertura, fechamento,
navegação entre fotos e atualização
do contador.

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

const fotoAnterior =
    document.getElementById("fotoAnterior");

const fotoProxima =
    document.getElementById("fotoProxima");

const contadorLightbox =
    document.getElementById("contadorLightbox");

/*
====================================================
VARIÁVEIS
====================================================
*/

let imagensGaleria = [];

let indiceAtual = 0;

/*
====================================================
ATUALIZAR IMAGEM
====================================================
*/

function atualizarImagem() {

    if (imagensGaleria.length === 0) {

        return;

    }

    const imagem = imagensGaleria[indiceAtual];

    imagemLightbox.src =
        imagem.src;

    imagemLightbox.alt =
        imagem.alt;

    atualizarContador();

}

/*
====================================================
ATUALIZAR CONTADOR
====================================================
*/

function atualizarContador() {

    if (!contadorLightbox) {

        return;

    }

    contadorLightbox.textContent =
        `${indiceAtual + 1} de ${imagensGaleria.length}`;

}

/*
====================================================
ABRIR LIGHTBOX
====================================================
*/

function abrirLightbox(imagem) {

    imagensGaleria =
        Array.from(document.querySelectorAll(".foto-galeria"));

    indiceAtual =
        imagensGaleria.indexOf(imagem);

    if (indiceAtual < 0) {

        indiceAtual = 0;

    }

    atualizarImagem();

    lightbox.classList.add("aberto");

    if (lightbox) {

        lightbox.focus();

    }

    document.body.style.overflow = "hidden";

}

/*
====================================================
FECHAR LIGHTBOX
====================================================
*/

function fecharLightboxModal() {

    lightbox.classList.remove("aberto");

    if (imagemLightbox) {

        imagemLightbox.src = "";
    }

    document.body.style.overflow = "";

}

/*
====================================================
PRÓXIMA FOTO
====================================================
*/

function proximaFoto() {

    if (imagensGaleria.length === 0) {

        return;

    }

    indiceAtual++;

    if (indiceAtual >= imagensGaleria.length) {

        indiceAtual = 0;

    }

    atualizarImagem();

}

/*
====================================================
FOTO ANTERIOR
====================================================
*/

function anteriorFoto() {

    if (imagensGaleria.length === 0) {

        return;

    }

    indiceAtual--;

    if (indiceAtual < 0) {

        indiceAtual = imagensGaleria.length - 1;

    }

    atualizarImagem();

}

/*
====================================================
BOTÕES
====================================================
*/

if (fotoAnterior) {

    fotoAnterior.addEventListener(

        "click",

        function (evento) {

            evento.stopPropagation();

            anteriorFoto();

        }

    );

}

if (fotoProxima) {

    fotoProxima.addEventListener(

        "click",

        function (evento) {

            evento.stopPropagation();

            proximaFoto();

        }

    );

}

/*
====================================================
BOTÃO FECHAR
====================================================
*/

if (fecharLightbox) {

    fecharLightbox.addEventListener(

        "click",

        function (evento) {

            evento.stopPropagation();

            fecharLightboxModal();

        }

    );

}

/*
====================================================
CLIQUE FORA DA IMAGEM
====================================================
*/

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

/*
====================================================
FECHAMENTO VIA TECLADO
====================================================
*/

document.addEventListener(

    "keydown",

    function (evento) {

        if (!lightbox.classList.contains("aberto")) {

            return;

        }

        if (evento.key === "Escape") {

            evento.preventDefault();

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