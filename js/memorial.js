/*
====================================================

Arquivo.....: memorial.js

Projeto.....: Memorial Peternizando

Release.....: 1.3.0

Descrição...:
Núcleo principal da aplicação.

Responsabilidades:

- Ler o código da URL
- Carregar o JSON
- Preencher o cabeçalho
- Inicializar os módulos da aplicação

====================================================
*/

console.clear();

console.log("========================================");
console.log(" Memorial Peternizando");
console.log(" Release 1.1.1");
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

    try {

        codigo = obterCodigoMemorial();

        dadosMemorial = await carregarDadosMemorial(codigo);

        preencherCabecalho(dadosMemorial);

        carregarGaleria(dadosMemorial);

        carregarMidia(dadosMemorial);

        console.log("Memorial carregado com sucesso.");

    }
    catch (erro) {

        console.error(erro);

        exibirTelaErro();

    }

}

/*
====================================================
OBTER CÓDIGO DA URL
====================================================
*/

function obterCodigoMemorial() {

    const parametros = new URLSearchParams(window.location.search);

    const codigoRecebido = parametros.get("id");

    if (!codigoRecebido) {

        throw new Error("Código do memorial não informado.");

    }

    console.log("Código recebido:", codigoRecebido);

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
PREENCHER CABEÇALHO
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
TELA DE ERRO
====================================================
*/

function exibirTelaErro() {

    document.body.innerHTML = `

        <main class="container">

            <article class="card">

                <h1>

                    Memorial não encontrado

                </h1>

                <br>

                <p>

                    O memorial solicitado não existe
                    ou está temporariamente indisponível.

                </p>

            </article>

        </main>

    `;

}

/*
====================================================
START
====================================================
*/

document.addEventListener("DOMContentLoaded", iniciarAplicacao);