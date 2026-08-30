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