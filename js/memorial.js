/*
====================================================

Arquivo.....: memorial.js

Projeto.....: Memorial Peternizando

Release.....: 1.1.0

Descrição...:
Núcleo principal da aplicação.

====================================================
*/

console.clear();

console.log("========================================");
console.log(" Memorial Peternizando");
console.log(" Release 1.1.0");
console.log("========================================");

/*
====================================================
VARIÁVEIS GLOBAIS
====================================================
*/

let codigo = "";

let dadosMemorial = null;

/*
====================================================
INICIAR APLICAÇÃO
====================================================
*/

async function iniciarAplicacao() {

    codigo = obterCodigoMemorial();

    dadosMemorial = await carregarDadosMemorial(codigo);

    preencherCabecalho(dadosMemorial);

    carregarGaleria(dadosMemorial);

}

/*
====================================================
OBTER CÓDIGO
====================================================
*/

function obterCodigoMemorial() {

    const parametros = new URLSearchParams(window.location.search);

    const codigoRecebido = parametros.get("id");

    if (!codigoRecebido) {

        alert("Código do memorial não informado.");

        throw new Error("Código não informado.");

    }

    console.log("Código:", codigoRecebido);

    return codigoRecebido;

}

/*
====================================================
CARREGAR JSON
====================================================
*/

async function carregarDadosMemorial(codigo) {

    const caminho = `memoriais/${codigo}/dados.json`;

    const resposta = await fetch(caminho);

    if (!resposta.ok) {

        throw new Error("Memorial não encontrado.");

    }

    return await resposta.json();

}

/*
====================================================
CABEÇALHO
====================================================
*/

function preencherCabecalho(dados) {

    document.title =
        `${dados.nome} | Memorial Peternizando`;

    document.getElementById("fotoPrincipal").src =
        `memoriais/${codigo}/imagens/${dados.fotoPrincipal}`;

    document.getElementById("fotoPrincipal").alt =
        dados.nome;

    document.getElementById("nomePet").textContent =
        dados.nome;

    document.getElementById("mensagem").textContent =
        dados.mensagem;

    const nomeRecordacoes =
        document.getElementById("nomeRecordacoes");

    if (nomeRecordacoes) {

        nomeRecordacoes.textContent =
            dados.nome;

    }

}

/*
====================================================
START
====================================================
*/

iniciarAplicacao();