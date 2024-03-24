// Exemplo de sistema de login em JavaScript

// Objeto para simular um banco de dados de usuários
const usuarios = {
    'admin': 'senha123',
    'usuario1': 'senha321'
  };
  
  // Função para validar o login
  function validarLogin(usuario, senha) {
    return usuarios[usuario] === senha;
  }
  
  // Função chamada quando o usuário submete o formulário de login
  function fazerLogin() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
  
    if (validarLogin(usuario, senha)) {
      // Login bem-sucedido, redireciona para a página principal
      window.location.href = 'pag1.html';
    } else {
      // Login falhou, mostra uma mensagem de erro
      alert('Usuário ou senha incorretos!');
    }
  
    // Previne o formulário de ser submetido e a página recarregada
    return false;
  }
  