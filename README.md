[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/X0PTTWOX)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14699736&assignment_repo_type=AssignmentRepo)
ChatLab
=====

Uma implementação simples de uma engine de chat utilizando técnica de empilhamento com arrays e atualização de elementos com innerHTML.

## O que você deve fazer?

1. Crie um arquivo HTML chamada: ```index.html```
2. Crie um arquivo Javascript chamado: ```chat.js```

**No arquivo HTML ```index.html```**
1. Faça o carregamento do Javascript no HTML
2. Crie uma estrutura de HTML que seja similar a essa:
```html
<div id="chat-container">
    <div id="chat-messages"></div>
    <input type="text" id="message-input" placeholder="Digite uma mensagem..." autofocus>
    <button id="message-commit">Adicionar mensagem</button>
</div>
```

**No arquivo Javascript ```chat.js```**
1. Crie um array chamado ```listaMensagens```
2. Implemente uma função chamada ```adicionarMensagem```. Essa função deve receber 2 argumentos: ```apelido``` e ```mensagem```. Essa função deve empilhar no array ```listaMensagens``` um objeto com a seguinte estrutura:
```json
{
    "apelido": "...", 
    "mensagem": "...",
}
```
3. Implemente uma função chamada ```formatarMensagens```, sem argumentos. O objetivo dessa função é percorrer o array ```listaMensagens``` e montar uma estrutura de HTML com a seguinte estrutura:
```html
<div class="chat-message">
    <span class="chat-message-apelido">
        <!-- implementar apelido aqui -->
    </span>
    <span class="chat-message-item">
        <!-- implementar mensagem -->
    </span>
</div>
```
4. Implemente uma função chamada: ```atualizarHTML```, sem argumentos. O objetivo dessa função é receber os valores formatados da função ```formatarMensagens``` e atualizar o conteudo da div ```#chat-messages```.
5. Implemente uma função chamada ```commitMessageClickHandler```, sem argumentos. Essa função deve ser executada ao pressionar o botão ```#message-commit```. O objetivo dessa função é executar a função: ```adicionarMensagem``` passando o valor de ```#message-input``` com um apelido que você desejar associar. Não esquecer de limpar o input ```#message-input```.
6. Faça o tratamento para evitar mensagens em branco utilizando o método .trim() da classe String.