document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const userEmail = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    const errorMessage = document.getElementById("error-message");
  
    let usuariosLS = JSON.parse(localStorage.getItem('usuarios-cadastrados')); 
    let sucessoLogin = false;   

    // Verificação de login
    usuariosLS.map((usuario) => {
      if (userEmail === usuario.emailDB && password === usuario.passwordDB) {
        sucessoLogin = true;             
      }
    });

    if(sucessoLogin) {
      errorMessage.textContent = "";
      setTimeout(() => {
        alert("Login bem-sucedido!"); 
      }, 100);      
    } else {
      errorMessage.textContent = "Usuário ou senha incorretos.";
    }
});