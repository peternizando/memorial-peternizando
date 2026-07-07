/*
====================================================

Arquivo.....: midia.js

Projeto.....: Memorial Peternizando

Release.....: 1.3.0

Descrição...:
Responsável pelo carregamento das mídias
(vídeos) do memorial.

====================================================
*/

function carregarMidia(dados) {

    console.log("Carregando mídias...");

    const areaVideo = document.getElementById("video");

    if (!areaVideo) {

        return;

    }

    areaVideo.innerHTML = "";

    if (!dados.videos || dados.videos.length === 0) {

        areaVideo.innerHTML = `

            <div class="video-placeholder">

                <img
                    src="assets/placeholders/placeholder-video.svg"
                    alt="Vídeo">

                <p>

                    Nenhum vídeo disponível.

                </p>

            </div>

        `;

        console.log("Nenhum vídeo encontrado.");

        return;

    }

    const video = dados.videos[0];

    const player = document.createElement("video");

    player.className = "video-player";

    player.controls = true;

    player.preload = "metadata";

    player.src =
        `memoriais/${dados.codigo}/videos/${video.arquivo}`;

    if (video.poster) {

        player.poster =
            `memoriais/${dados.codigo}/imagens/${video.poster}`;

    }

    areaVideo.appendChild(player);

    console.log("Vídeo carregado.");

}