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

        const codigo = obterCodigoMemorial();

        console.log("Código recebido:", codigo);

        const dados = await carregarDados(codigo);

        console.log("JSON carregado com sucesso!");

        console.table(dados);

    } catch (erro) {

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

    const caminho = `./memoriais/${codigo}/dados.json`;

    console.log("Buscando:", caminho);

    const resposta = await fetch(caminho);

    console.log("Status:", resposta.status);

    if (!resposta.ok) {

        throw new Error("Não foi possível carregar o memorial.");

    }

    return await resposta.json();

}