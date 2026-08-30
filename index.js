function validarCampos(){
    const emailValido = descobreSeEmailValido();
    document.getElementById('recover-password-button').disabled = !emailValido;

    const senhaValida = descobreSeSenhaValida();
    document.getElementById("login-button").disabled = !emailValido || !senhaValida;
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
 