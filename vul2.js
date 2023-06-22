// Vulnerabilidade 1: XSS (Cross-Site Scripting)
function displayMessage() {
    var message = document.getElementById('message').value;
    document.write('<div>' + message + '</div>');
  }
  
  // Vulnerabilidade 2: SQL Injection
  function getUser(username) {
    var query = "SELECT * FROM users WHERE username = '" + username + "'";
    // Executar a consulta SQL no banco de dados
  }
  
  // Vulnerabilidade 3: CSRF (Cross-Site Request Forgery)
  function changePassword(password) {
    var request = new XMLHttpRequest();
    request.open('POST', 'https://example.com/changepassword', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send('password=' + password);
  }
  
  // Vulnerabilidade 4: Vazamento de informações sensíveis
  function logIn(username, password) {
    console.log('Login realizado. Usuário: ' + username + ', Senha: ' + password);
  }
  