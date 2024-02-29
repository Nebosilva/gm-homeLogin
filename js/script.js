//efeito do botão voltar ao Topo

function topo(){
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

//Clique em login

document.addEventListener('DOMContentLoaded', function() {

    var btnLogin = document.getElementById('btn-login');
  
    btnLogin.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
  });
  
//Voltar tela de login

document.addEventListener('DOMContentLoaded', function() {

    var btnVoltarTopo = document.getElementById('voltar');
  
    btnVoltarTopo.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
  });
  
//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();
   
    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }
    
    if(logado == 0){
            alert("Acesso Negado. Dados incorretos");
    } 
}

//Ativar alert no botão cadastrar

function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
}
    