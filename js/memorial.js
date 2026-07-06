console.clear();

console.log("================================");
console.log(" Memorial Peternizando");
console.log("================================");

/*
==========================================
OBTER O CÓDIGO DO MEMORIAL
==========================================
*/

const parametros = new URLSearchParams(window.location.search);

const codigo = parametros.get("id");

if (!codigo) {

    alert("Código do memorial não informado.");

    throw new Error("Código não informado.");

}

console.log("Código recebido:", codigo);

/*
==========================================
CAMINHO DO JSON
==========================================
*/

const caminhoJson = `memoriais/${codigo}/dados.json`;

/*
==========================================
CARREGAR DADOS
==========================================
*/

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

/*
==========================================
PREENCHER A PÁGINA
==========================================
*/

function preencherPagina(dados) {

    document.title = dados.nome + " | Memorial Peternizando";

    document.getElementById("nomePet").textContent = dados.nome;

    document.getElementById("mensagem").textContent = dados.mensagem;

    document.getElementById("fotoPrincipal").src =
        `memoriais/${codigo}/imagens/${dados.fotoPrincipal}`;

    document.getElementById("fotoPrincipal").alt =
        dados.nome;

}

/*
==========================================
INICIAR APLICAÇÃO
==========================================
*/

carregarMemorial();