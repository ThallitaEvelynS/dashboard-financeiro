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
    form.erroEmailObrigatorio().style.display = email ? "none" : "block";
    form.erroEmailInvalido().style.display = email ? "none" : "block";
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
    form.erroSenhaObrigatoria().style.display = password ? "none" : "block";
}

function alternarBotoesDesabilitados(){
    const emailValido = descobreSeEmailValido();
    form.botaoRecuperarSenha().disabled = !emailValido;

    const senhaValida = descobreSeSenhaValida();
    form.botaoEntrar().disabled = !emailValido || !senhaValida;
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

function login() {
  firebase.auth().signInWithEmailAndPassword(
    form.email().value, form.password().value
    ).then(response => {
        window.location.href="pages/home/home.html";
    }).catch(error => {
        alert(getMensagemErro(error));
        console.log('error', error)
    });
}

function getMensagemErro(error) {
    if (error.code == "auth/invalid-credential") {
        return "Usuário não encontrado";
    }
    return error.message;
}

function register() {
    window.location.href ="pages/register/register.html";
}

const firebaseConfig = {
        apiKey: "AIzaSyAPbS5fB7IrBDaV6UaKSXrtLufRyNCZFPs",
        authDomain: "controle-financeiro-41e5c.firebaseapp.com",
        projectId: "controle-financeiro-41e5c",
        storageBucket: "controle-financeiro-41e5c.firebasestorage.app",
        messagingSenderId: "394921393017",
        appId: "1:394921393017:web:63c5f0764bdd2badf38da8"
  };
  firebase.initializeApp(firebaseConfig);