/*
====================================================

Arquivo.....: galeria.js

Projeto.....: Memorial Peternizando

Release.....: 1.2.0

Descrição...:
Responsável pelo carregamento das
Recordações e integração com o Lightbox.

====================================================
*/

/*
====================================================
CARREGAR GALERIA
====================================================
*/

function carregarGaleria(dados) {

    console.log("Carregando galeria...");

    const galeria =
        document.getElementById("galeria");

    if (!galeria) {

        return;

    }

    galeria.innerHTML = "";

    if (!dados.galeria || dados.galeria.length === 0) {

        galeria.innerHTML =

            "<p>Nenhuma recordação encontrada.</p>";

        return;

    }

    dados.galeria.forEach(function (foto) {

        criarImagemGaleria(

            galeria,

            dados,

            foto

        );

    });

    console.log(

        dados.galeria.length +

        " recordações carregadas."

    );

}

/*
====================================================
CRIAR IMAGEM
====================================================
*/

function criarImagemGaleria(

    galeria,

    dados,

    foto

) {

    const imagem =

        document.createElement("img");

    imagem.src =

        `memoriais/${dados.codigo}/imagens/${foto}`;

    imagem.alt =

        dados.nome;

    imagem.className =

        "foto-galeria";

    imagem.loading =

        "lazy";

    /*
    ================================================
    ABRIR LIGHTBOX
    ================================================
    */

    imagem.addEventListener(

        "click",

        function () {

            abrirLightbox(imagem);

        }

    );

    galeria.appendChild(imagem);

}

/*
====================================================
FIM DO ARQUIVO
====================================================
*/