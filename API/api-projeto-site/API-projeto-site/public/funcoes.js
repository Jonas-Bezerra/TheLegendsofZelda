let emails;
let nome_usuario;
let apelidoUsuario;

function redirecionar_index() {
    window.location.href = 'index.html';
}

function verificar_autenticacao() {
    emails = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    apelidoUsuario = sessionStorage.apelido_usuario_meuapp;
    // sessionStorage.id_usuario_meuapp = json.idUsuario; 

    if (emails == undefined) {
        redirecionar_index();
    } else {
        b_usuario.innerHTML = apelidoUsuario;
        validar_sessao();
    }

}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_index();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${emails}`, { cache: 'no-store' })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            }
        });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${emails}`, { cache: 'no-store' });
}