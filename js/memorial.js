console.clear();

console.log("================================");
console.log(" Memorial Peternizando");
console.log("================================");

const parametros = new URLSearchParams(window.location.search);

const codigo = parametros.get("id");

if (!codigo) {

    alert("Código do memorial não informado.");

    throw new Error("Código do memorial não informado.");

}

console.log("Código recebido:", codigo);

const caminhoJson = `memoriais/${codigo}/dados.json`;

async function carregarMemorial() {

    try {

        const resposta = await fetch(caminhoJson);

        if (!resposta.ok) {

            throw new Error("Memorial não encontrado.");

        }

        const dados = await resposta.json();

        preencherPagina(dados);

    }

    catch (erro) {

        console.error(erro);

        alert("Memorial não encontrado.");

    }

}

function preencherPagina(dados) {

    document.title = `${dados.nome} | Memorial Peternizando`;

    document.getElementById("nomePet").textContent =
        dados.nome;

    document.getElementById("mensagem").textContent =
        dados.mensagem;

    document.getElementById("fotoPrincipal").src =
        `memoriais/${codigo}/imagens/${dados.fotoPrincipal}`;

    document.getElementById("fotoPrincipal").alt =
        dados.nome;

    const nomeRecordacoes =
        document.getElementById("nomeRecordacoes");

    if (nomeRecordacoes) {

        nomeRecordacoes.textContent = dados.nome;

    }

}

carregarMemorial();