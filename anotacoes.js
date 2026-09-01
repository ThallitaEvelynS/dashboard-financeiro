/*

function validarCampos(){
    verificar se o email é válido chamando descobreSeEmailValido()
    habilitar ou desabilitar recuperar senha de acordo com o resultado
    verificar se a senha é válida chamando descobreSeSenhaValida()
    habilitar entrar somente se email e senha forem válidos
}
--------------------------------------------------------------------------------------
function validarCampos(){
    const emailValido = descobreSeEmailValido();
    document.getElementById('recover-password-button').disabled = !emailValido;

    const senhaValida = descobreSeSenhaValida();
    document.getElementById("login-button").disabled = !emailValido || !senhaValida;
}
---------------------------------------------------------------------------------------


function descobreSeEmailValido() {
    pegar o valor do campo de email
    verificar se o campo de email está vazio
    se estiver vazio, retornar falso
    se não estiver vazio, verificar se o email tem um formato válido
    retornar o resultado dessa validação
}

function descobreSeSenhaValida() {
    pegar o valor do campo de senha
    verificar se o campo de senha está vazio
    se estiver vazio, retornar falso
    se não estiver vazio, retornar verdadeiro
}

function validarEmail(email) {
    receber um email
    verificar se esse email segue um formato parecido com:
    texto@texto.texto
    se seguir esse formato, retornar verdadeiro
    se não seguir, retornar falso
}

function alternarErrosEmail() {
    pegar o valor do campo de email
    verificar se o campo de email está vazio
    se estiver vazio, mostrar o erro "E-mail é obrigatório"
    se não estiver vazio, esconder o erro "E-mail é obrigatório"
    verificar se o email é válido
    se o email for válido, esconder o erro "E-mail é inválido"
    se o email for inválido, mostrar o erro "E-mail é inválido"
}

function alternarErrosSenha() {
    pegar o valor do campo de senha
    verificar se o campo de senha está vazio
    se estiver vazio, mostrar o erro "Senha é obrigatória"
    se não estiver vazio, esconder o erro da senha
}

function alternarBotoesDesabilitados() {
    verificar se o email é válido
    se o email for válido, habilitar o botão de recuperar senha
    se o email for inválido, desabilitar o botão de recuperar senha
    verificar se a senha é válida
    se o email e a senha forem válidos, habilitar o botão entrar
    se o email ou a senha forem inválidos, desabilitar o botão entrar
}

------------------------------------------------------------------------------------------------------
Estava assim com a lógica anterior, mas depois disso apliquei função de organização de código
function alteracaoEmail(){
    alternarBotoesDesabilitados();
    alternarErrosEmail();
}

function alteracaoSenha() {
    alternarBotoesDesabilitados();
    alternarErrosSenha();
}

function descobreSeEmailValido() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
        return validarEmail(email);
}

function descobreSeSenhaValida() {
    const password = document.getElementById("password").value;
    if (!password) {
        return false;
     }
      return true;
 }

function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
 }
 
function alternarErrosEmail() {
    const email = document.getElementById("email").value;
    if(!email){
        document.getElementById("erro-email-obrigatorio").style.display = "block";
    } else{
        document.getElementById("erro-email-obrigatorio").style.display = "none";
    }

    if (validarEmail(email)) {
        document.getElementById("erro-email-invalido").style.display = "none";
    } else {
        document.getElementById("erro-email-invalido").style.display = "block";
    }
}

function alternarErrosSenha() {
    const password = document.getElementById("password").value;
    if (!password) {
        document.getElementById("erro-senha-obrigatoria").style.display = "block";
    } else {
        document.getElementById("erro-senha-obrigatoria").style.display = "none";
    }
}

function alternarBotoesDesabilitados(){
    const emailValido = descobreSeEmailValido();
    document.getElementById('recover-password-button').disabled = !emailValido;

    const senhaValida = descobreSeSenhaValida();
    document.getElementById("login-button").disabled = !emailValido || !senhaValida;
}
----------------------------------------------------------------------------------------------------------
código pós alterações

function alteracaoEmail() {
    quando houver uma alteração no campo de email
    atualizar o estado dos botões de acordo com a validade dos campos
    atualizar os erros exibidos no campo de email
}

function alteracaoSenha() {
    quando houver uma alteração no campo de senha
    atualizar o estado dos botões de acordo com a validade dos campos
    atualizar os erros exibidos no campo de senha
}

function descobreSeEmailValido() {
    pegar o valor do campo de email através do objeto form
    verificar se o campo de email está vazio
    se estiver vazio, retornar falso
    se não estiver vazio, verificar se o email possui um formato válido
    retornar o resultado da validação do email
}

function alternarErrosEmail() {
    pegar o valor do campo de email através do objeto form
    verificar se o campo de email está vazio
    se estiver vazio, mostrar o erro "E-mail é obrigatório"
    se não estiver vazio, esconder o erro "E-mail é obrigatório"
    verificar se o email possui um formato válido
    se o email for válido, esconder o erro "E-mail é inválido"
    se o email for inválido, mostrar o erro "E-mail é inválido"
}

function descobreSeSenhaValida() {
    pegar o valor do campo de senha através do objeto form
    verificar se o campo de senha está vazio
    se estiver vazio, retornar falso
    se não estiver vazio, retornar verdadeiro
}

function alternarErrosSenha() {
    pegar o valor do campo de senha através do objeto form
    verificar se o campo de senha está vazio
    se estiver vazio, mostrar o erro "Senha é obrigatória"
    se não estiver vazio, esconder o erro "Senha é obrigatória"
}

function alternarBotoesDesabilitados() {
    verificar se o email é válido
    se o email for válido, habilitar o botão de recuperar senha
    se o email for inválido, desabilitar o botão de recuperar senha
    verificar se a senha é válida
    se o email e a senha forem válidos, habilitar o botão entrar
    se o email ou a senha forem inválidos, desabilitar o botão entrar
}

function validarEmail(email) {
 
}

const form = {
    criar um objeto para centralizar o acesso aos elementos do formulário
    email: buscar e retornar o campo de email pelo seu id
    password: buscar e retornar o campo de senha pelo seu id
    erroEmailObrigatorio: buscar e retornar a mensagem de email obrigatório pelo seu id
    erroEmailInvalido: buscar e retornar a mensagem de email inválido pelo seu id
    erroSenhaObrigatoria: buscar e retornar a mensagem de senha obrigatória pelo seu id
    botaoRecuperarSenha: buscar e retornar o botão de recuperar senha pelo seu id
    botaoEntrar: buscar e retornar o botão entrar pelo seu id
}
*/        