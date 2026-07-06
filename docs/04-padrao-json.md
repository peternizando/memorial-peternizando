# Padrão do JSON

## Objetivo

Definir a estrutura oficial do arquivo dados.json.

---

# Estrutura

```json
{
    "codigo": "PTZ-A8F4K9XM",

    "versao": "1.0",

    "nome": "Marlei",

    "mensagem": "Obrigado por todos os anos de amor, companheirismo e felicidade.",

    "fotoPrincipal": "foto01.png",

    "galeria": [
        "foto01.png",
        "foto02.png",
        "foto03.png"
    ],

    "videos": [
        "video01.mp4"
    ]
}
```

---

# Regras

## codigo

Obrigatório.

---

## versao

Obrigatório.

---

## nome

Obrigatório.

---

## mensagem

Obrigatória.

---

## fotoPrincipal

Obrigatória.

Deve existir dentro da galeria.

---

## galeria

Mínimo:

1 foto.

Máximo:

10 fotos.

---

## videos

Máximo:

1 vídeo.

---

# Extensões aceitas

Fotos:

- JPG
- JPEG
- PNG

Vídeo:

- MP4