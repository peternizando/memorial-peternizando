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

    const codigo = obterCodigoMemorial();

    console.log("Código recebido:", codigo);

}

/**
 * Obtém código do memorial informado na URL.
 *
 * Exemplo:
 * memorial.html?id=MP-TESTE001
 */
function obterCodigoMemorial() {

    const parametros = new URLSearchParams(window.location.search);

    const codigo = parametros.get("id");

    if (!codigo) {

        alert("Nenhum memorial informado.");

        throw new Error("Parâmetro 'id' não encontrado.");

    }

    return codigo;

}