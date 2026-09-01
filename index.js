function alteracaoEmail(){
    alternarBotoesDesabilitados();
    alternarErrosEmail();
}

function alteracaoSenha() {
    alternarBotoesDesabilitados();
    alternarErrosSenha();
}

function descobreSeEmailValido() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
        return validarEmail(email);
}

function alternarErrosEmail() {
    const email = form.email().value;
    if(!email){
        form.erroEmailObrigatorio().style.display = "block";
    } else{
        form.erroEmailObrigatorio().style.display = "none";
    }

    if (validarEmail(email)) {
        form.erroEmailInvalido().style.display = "none";
    } else {
        form.erroEmailInvalido().style.display = "block";
    }
}

function descobreSeSenhaValida() {
    const password = form.password().value;
    if (!password) {
        return false;
     }
      return true;
 }

function alternarErrosSenha() {
    const password = form.password().value;
    if (!password) {
        form.erroSenhaObrigatoria().style.display = "block";
    } else {
        form.erroSenhaObrigatoria().style.display = "none";
    }
}

function alternarBotoesDesabilitados(){
    const emailValido = descobreSeEmailValido();
    form.botaoRecuperarSenha().disabled = !emailValido;

    const senhaValida = descobreSeSenhaValida();
    form.botaoEntrar().disabled = !emailValido || !senhaValida;
}

function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
 }
 

const form = {
    email: () => document.getElementById("email"),
    password: () => document.getElementById("password"),
    erroEmailObrigatorio: () => document.getElementById("erro-email-obrigatorio"),
    erroEmailInvalido: () => document.getElementById("erro-email-invalido"),
    erroSenhaObrigatoria: () => document.getElementById("erro-senha-obrigatoria"),
    botaoRecuperarSenha: () => document.getElementById("botao-recuperar-senha"),
    botaoEntrar: () => document.getElementById("botao-entrar")
} 