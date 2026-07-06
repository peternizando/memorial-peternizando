# Arquitetura do Memorial Peternizando

## Objetivo

Este documento define a arquitetura oficial da versão Lite (V1) do Memorial Peternizando.

Toda implementação do sistema deverá seguir esta arquitetura.

---

# Filosofia

O sistema é permanente.

Os memoriais são dados.

Isso significa que o código da aplicação não deverá ser alterado para criar novos memoriais.

Criar um novo memorial significa apenas adicionar uma nova pasta contendo seus arquivos.

---

# Arquitetura Geral

```
               Cliente

                  │

                  ▼

         NFC ou QR Code

                  │

                  ▼

         memorial.html?id=PTZ-XXXXXXXX

                  │

                  ▼

            memorial.js

                  │

                  ▼

             dados.json

                  │

        ┌─────────┴─────────┐

        ▼                   ▼

    Imagens             Vídeo
```

---

# Estrutura do Projeto

```
memorial-peternizando/

│

├── css/

├── docs/

├── js/

├── memoriais/

├── modelos/

├── index.html

├── memorial.html

└── README.md
```

---

# Estrutura dos Memoriais

Cada memorial deverá possuir sua própria pasta.

Exemplo:

```
memoriais/

└── PTZ-A8F4K9XM/

      dados.json

      imagens/

            foto01.png
            foto02.png
            foto03.png

      videos/

            video01.mp4
```

---

# Responsabilidade das Pastas

## css

Arquivos responsáveis pela aparência da aplicação.

---

## docs

Documentação oficial do projeto.

---

## js

Toda regra de negócio da aplicação.

---

## memoriais

Armazena todos os memoriais dos clientes.

Cada pasta representa um único memorial.

---

## modelos

Arquivos utilizados como modelo para criação de novos memoriais.

---

# Fluxo de Funcionamento

1. O usuário aproxima o celular da tag NFC ou lê o QR Code.

2. O navegador abre:

```
memorial.html?id=PTZ-XXXXXXXX
```

3. O JavaScript identifica o código do memorial.

4. O sistema localiza:

```
memoriais/PTZ-XXXXXXXX/dados.json
```

5. O JSON é carregado.

6. O HTML é preenchido automaticamente.

7. As imagens são carregadas.

8. O vídeo é carregado.

---

# Princípios

## Simplicidade

Toda solução deverá ser a mais simples possível.

---

## Organização

Cada memorial é independente.

---

## Escalabilidade

A arquitetura deverá suportar milhares de memoriais.

---

## Performance

A aplicação deverá carregar rapidamente em dispositivos móveis.

---

## Baixa manutenção

Nenhum novo memorial deverá exigir alteração no código.

---

# Fora do Escopo da V1

Não fazem parte desta arquitetura:

- Banco de dados
- API
- Login
- Área administrativa
- Upload pelo navegador

Esses recursos poderão ser adicionados em versões futuras.

---

# Arquitetura Oficial

Após aprovação deste documento, esta arquitetura passa a ser considerada oficial para o Memorial Peternizando Lite (V1).