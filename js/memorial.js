// ==========================================
// Memorial Peternizando
// ==========================================

iniciar();

/**
 * Inicializa a aplicação.
 */
async function iniciar() {

    console.clear();

    console.log("================================");
    console.log(" Memorial Peternizando");
    console.log("================================");

    try {

        const codigo = obterCodigoMemorial();

        console.log("Código recebido:", codigo);

        const dados = await carregarDados(codigo);

        preencherPagina(dados);

        console.log("Memorial carregado com sucesso.");

    } catch (erro) {

        console.error(erro);

    }

}

/**
 * Obtém o código do memorial.
 */
function obterCodigoMemorial() {

    const parametros = new URLSearchParams(window.location.search);

    const codigo = parametros.get("id");

    if (!codigo) {

        throw new Error("Nenhum memorial informado.");

    }

    return codigo;

}

/**
 * Carrega o JSON.
 */
async function carregarDados(codigo) {

    const caminho = `./memoriais/${codigo}/dados.json`;

    const resposta = await fetch(caminho);

    if (!resposta.ok) {

        throw new Error("Memorial não encontrado.");

    }

    return await resposta.json();

}

/**
 * Atualiza a página.
 */
function preencherPagina(dados) {

    document.getElementById("nomePet").textContent = dados.nome;

    document.getElementById("mensagem").textContent = dados.mensagem;

}