# Challenge TINNOVA
Api automation challenge Tinnova

<div justify-content="space-between" align-items="center">
    <img src="https://seekicon.com/free-icon-download/cypress_1.svg" width="50" alt= "Cypress"/>
    <img src="https://seekicon.com/free-icon-download/javascript_3.svg" width="50" alt="Javascript"/>
</div>

## Configuração

1. Após clonar este repositório, execute o comando no terminal:
```
npm install
```
2. Para executar os testes:
```
npm run test:api
```
3. Para executar os testes você vai precissar do arquivo:
```
.env
```
nele está contido as credenciais da api do trello.

## Estrutura

O projeto de automação de API possui a seguinte estrutura:

- **_api_** - Contém todos os arquivos de especificação (_specs_) objetos de validação de nossos cenários.
- **_support_** - Esta pasta contém commands.js. É possível personalizar comandos e chama-los em qualquer linha de código das pages objects e steps do cucumber.
- **_pages_** - Criamos pastas para organizar classes e métodos que vamos utilizar em nossas steps, para interagir com os elementos das WebPages, mas nesse projeto pequeno fiz uso de cy.commands para contruir o case rápidamente.
- **_cypress.config.js_** - É usado para salvar diferentes configurações relacionadas ao Cypress, por exemplo. URL base, tempos limite de execução, etc. O comportamento padrão do Cypress pode ser modificado fornecendo parâmetros de configuração. [_mais sobre..._](https://docs.cypress.io/guides/references/configuration#cypress-json).

Para entender melhor como um projeto de automação cypress é estruturado, consulte a [documentação oficial](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Test-Structure).


````
challenge-tinnova/
    ├──cypress/
    |   ├──api/
    |   |   └──name-spec.cy.js
    |   └──support/
    |       └──commands/
    |             └──nameAuxiliaryCommands.js/
    |       
    └──cypress.config.js
````

## Fontes

- [Documentação do Cypress](https://docs.cypress.io/guides/overview/why-cypress)

## Cenários

| Gerenciar Trello                             |
| -------------------------------------------- |
| Cadastrar board                              |
| Excluir board                                |
| Cadastrar card                               |
| Excluir card                                 |

## Evidências

![Resultado do teste](/assets/details-test-img.png)

![Execução do teste](https://github.com/DiegoJOFernandes/challenge-tinnova/assets/execute-test.mp4)
![Detalhes do teste](https://github.com/DiegoJOFernandes/challenge-tinnova/assets/details-test.mp4)
