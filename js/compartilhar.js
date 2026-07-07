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

    copiarLink(url);

}

/*
====================================================
COPIAR LINK
====================================================
*/

async