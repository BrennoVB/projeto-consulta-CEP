#  Consulta de CEPs e Endereços

Sistema web para consulta de CEPs brasileiros com histórico de pesquisas, desenvolvido com HTML, CSS e JavaScript puro.

 **[Acesse o projeto](https://brennovb.github.io/projeto-consulta-CEP/)**

---

##  Funcionalidades

- Consulta de CEP em tempo real via API ViaCEP
- Validação do CEP com Expressões Regulares (RegEx)
- Exibição do endereço completo (logradouro, bairro, cidade e estado)
- Histórico de CEPs consultados com persistência via LocalStorage
- Remoção de itens do histórico
- Layout responsivo (mobile first)

---

##  Tecnologias utilizadas

- HTML5
- CSS3 (Flexbox e Media Queries)
- JavaScript ES6+
  - Fetch API
  - LocalStorage
  - ES6 Modules (import/export)
  - Expressões Regulares (RegEx)
  - Manipulação do DOM

---

##  Estrutura do projeto

```
projeto-consulta-CEP/
├── index.html
├── estilo/
│   └── style.css
├── scripts/
│   └── script.js
└── modulos/
    ├── api.js
    ├── storage.js
    └── ui.js
```

##  Como usar

1. Clone o repositório
```bash
git clone https://github.com/BrennoVB/projeto-consulta-CEP.git
```
2. Abra o arquivo `index.html` no navegador
3. Digite um CEP válido com 8 dígitos e clique em **Buscar**


Feito por **Brenno** — estudante de desenvolvimento web em constante evolução.