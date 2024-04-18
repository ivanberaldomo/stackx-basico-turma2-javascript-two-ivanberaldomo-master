/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */
let listaMensagens= [];

function adicionarMensagem(apelido, mensagem) {
  listaMensagens.push({
    "apelido": apelido,
    "mensagem": mensagem,
  });
}

function formatarMensagens() {
  let mensagens = ``
  for (let index = 0; index < listaMensagens.length; index++) {
    const element = listaMensagens[index];
    mensagens += `<div class="chat-message">
  <span class="chat-message-apelido">
      ${element.apelido}
  </span>
  <span class="chat-message-item">
      ${element.mensagem}
  </span></div>`
  }
  return (mensagens)
}

function atualizarHTML() {
  let mensagens = formatarMensagens()
  let div = document.getElementById('chat-messages');
  div.innerHTML = mensagens
}

function commitMessageClickHandler() {
  let input = document.getElementById('message-input');
  let texto = input.value
  if (
    texto.trim().length === 0
  ) {
    input.value = ''
    input.focus()
    return
  }
  adicionarMensagem('Ivan', input.value.trim())
  input.value = ''
  atualizarHTML()
  input.focus()
}
// Exemplo: function minhaFuncao() { ... }


// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens, 
  atualizarHTML,
  commitMessageClickHandler
};
