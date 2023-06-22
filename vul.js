function getUserName() {
    var username = prompt("Digite seu nome de usuário:");
    return "Bem-vindo, " + username + "!";
  }
  
  var greeting = getUserName();
  document.write(greeting);