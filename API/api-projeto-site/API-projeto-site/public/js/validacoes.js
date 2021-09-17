function validarCadastro() {
    var nomeCadastro = inpNome.value;
    var apelidoCadastro = inpApelido.value;
    var emailCadastro = inpEmail.value;
    var senhaCadastro = inpSenha.value;
    var ConfirmarSenhaCadastro = inpSenha2.value;

    
    if (senhaCadastro == ConfirmarSenhaCadastro && ConfirmarSenhaCadastro.length > 0) {
        document.getElementById("inpSenha2").style.border = `2px dashed green`;
    } else {
        document.getElementById("inpSenha2").style.border = `2px dashed red`;
    }  

    if (senhaCadastro.length < 8) {
        document.getElementById("inpSenha").style.border = `2px dashed red`;
    } else {
        document.getElementById("inpSenha").style.border = `2px dashed green`;
    }

    if (emailCadastro.indexOf('@') < 0) {
        document.getElementById('inpEmail').style.border = `2px dashed red`;
    } else {
        document.getElementById('inpEmail').style.border = `2px dashed green`;
    }

    if (nomeCadastro.length < 4) {
        document.getElementById('inpNome').style.border = `2px dashed red`;
    } else {
        document.getElementById('inpNome').style.border = `2px dashed green`;
    }

    if (apelidoCadastro.length < 4) {
        document.getElementById('inpApelido').style.border = `2px dashed red`;
    } else {
        document.getElementById('inpApelido').style.border = `2px dashed green`;
    }


}

function displayMsg() {
    let nota = inpNotas.value;
    let opiniao = inpOpiniao.value;

    if (nota.length < 1 || opiniao.length < 5) {
        errorAvaliar.style.display = `block`;
        divValidacaoNota.style.display = `none`;
    } else {
        divValidacaoNota.style.display = `block`;
        errorAvaliar.style.display = `none`;
    }
}

