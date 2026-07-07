/*
====================================================

Arquivo.....: compartilhar.js

Projeto.....: Memorial Peternizando

Release.....: 1.5.0

Descrição...:
Responsável pelo compartilhamento do
Memorial utilizando a Web Share API.
Caso o navegador não suporte,
realiza a cópia automática da URL.

====================================================
*/

/*
====================================================
ELEMENTOS
====================================================
*/

const btnCompartilhar =
    document.getElementById("btnCompartilhar");

/*
====================================================
COMPARTILHAR MEMORIAL
====================================================
*/

async function compartilharMemorial() {

    const url =
        window.location.href;

    const titulo =
        document.title;

    const texto =
        "Conheça esta linda homenagem criada pela Peternizando.";

    /*
    ================================================
    WEB SHARE API
    ================================================
    */

    if (navigator.share) {

        try {

            await navigator.share({

                title: titulo,

                text: texto,

                url: url

            });

            console.log(
                "Compartilhamento realizado."
            );

        }

        catch (erro) {

            console.log(
                "Compartilhamento cancelado."
            );

        }

        return;

    }

    /*
    ================================================
    FALLBACK
    ================================================
    */

    await copiarLink(url);

}

/*
====================================================
COPIAR LINK
====================================================
*/

async function copiarLink(url) {

    /*
    ================================================
    CLIPBOARD API
    ================================================
    */

    if (navigator.clipboard) {

        try {

            await navigator.clipboard.writeText(url);

            console.log(
                "Link copiado para a área de transferência."
            );

            alert(
                "✅ Link copiado para a área de transferência."
            );

            return;

        }

        catch (erro) {

            console.error(
                "Erro ao copiar utilizando Clipboard API.",
                erro
            );

        }

    }

    /*
    ================================================
    FALLBACK PARA NAVEGADORES ANTIGOS
    ================================================
    */

    try {

        const campo =
            document.createElement("textarea");

        campo.value =
            url;

        campo.style.position =
            "fixed";

        campo.style.opacity =
            "0";

        document.body.appendChild(campo);

        campo.focus();

        campo.select();

        document.execCommand("copy");

        document.body.removeChild(campo);

        console.log(
            "Link copiado utilizando método alternativo."
        );

        alert(
            "✅ Link copiado para a área de transferência."
        );

    }

    catch (erro) {

        console.error(
            "Não foi possível copiar o link.",
            erro
        );

        alert(
            "Não foi possível compartilhar este memorial."
        );

    }

}

/*
====================================================
EVENTOS
====================================================
*/

if (btnCompartilhar) {

    btnCompartilhar.addEventListener(

        "click",

        compartilharMemorial

    );

}