// ==========================================
// Memorial Peternizando
// ==========================================

iniciar();

async function iniciar() {

    console.clear();

    console.log("================================");
    console.log(" Memorial Peternizando");
    console.log("================================");

    try {

        console.log("1 - Iniciando aplicação");

        const codigo = obterCodigoMemorial();

        console.log("2 - Código recebido:", codigo);

        const dados = await carregarDados(codigo);

        console.log("3 - JSON carregado");

        console.log(dados);

    } catch (erro) {

        console.error("ERRO ENCONTRADO:");

        console.error(erro);

    }

}

function obterCodigoMemorial() {

    const parametros = new URLSearchParams(window.location.search);

    const codigo = parametros.get("id");

    if (!codigo) {

        throw new Error("Nenhum memorial informado.");

    }

    return codigo;

}

async function carregarDados(codigo) {

    const caminho = `memoriais/${codigo}/dados.json`;

    console.log("3 - Caminho:", caminho);

    const resposta = await fetch(caminho);

    console.log("4 - Status HTTP:", resposta.status);

    if (!resposta.ok) {

        throw new Error("Memorial não encontrado.");

    }

    const dados = await resposta.json();

    console.log("5 - JSON convertido");

    return dados;

}