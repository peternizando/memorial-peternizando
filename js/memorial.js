// ==========================================
// Memorial Peternizando
// ==========================================

// Inicia a aplicação
iniciar();

/**
 * Função principal da aplicação.
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

        console.log("Dados carregados:");

        console.log(dados);

    } catch (erro) {

        console.error("Erro:", erro.message);

    }

}

/**
 * Obtém o código do memorial informado na URL.
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
 * Carrega o JSON do memorial.
 */
async function carregarDados(codigo) {

    const caminho = `memoriais/${codigo}/dados.json`;

    const resposta = await fetch(caminho);

    if (!resposta.ok) {

        throw new Error("Memorial não encontrado.");

    }

    return await resposta.json();

}