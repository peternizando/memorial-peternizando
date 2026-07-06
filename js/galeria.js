/*
====================================================

Arquivo.....: galeria.js

Projeto.....: Memorial Peternizando

Release.....: 1.1.0

Descrição...:
Responsável pelo carregamento das
Recordações.

====================================================
*/

function carregarGaleria(dados) {

    console.log("Carregando galeria...");

    const galeria = document.getElementById("galeria");

    if (!galeria) {

        return;

    }

    galeria.innerHTML = "";

    if (!dados.galeria || dados.galeria.length === 0) {

        galeria.innerHTML = "<p>Nenhuma recordação encontrada.</p>";

        return;

    }

    dados.galeria.forEach(function (foto) {

        const imagem = document.createElement("img");

        imagem.src =
            `memoriais/${dados.codigo}/imagens/${foto}`;

        imagem.alt =
            dados.nome;

        imagem.className =
            "foto-galeria";

        imagem.loading =
            "lazy";

        galeria.appendChild(imagem);

    });

    console.log(
        dados.galeria.length +
        " recordações carregadas."
    );

}