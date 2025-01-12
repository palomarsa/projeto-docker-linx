const registerForm = document.getElementById("register-form");

function formatarCPF(input) {
  let cpfFormat = input.value;

  // Remove tudo o que não é dígito
  cpfFormat = cpfFormat.replace(/\D/g, "");

  // Aplica a máscara
  if (cpfFormat.length <= 3) {
    cpfFormat = cpfFormat.replace(/(\d{3})/, "$1");
  } else if (cpfFormat.length <= 6) {
    cpfFormat = cpfFormat.replace(/(\d{3})(\d{0,3})/, "$1.$2");
  } else if (cpfFormat.length <= 9) {
    cpfFormat = cpfFormat.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
  } else if (cpfFormat.length <= 11) {
    cpfFormat = cpfFormat.replace(
      /(\d{3})(\d{3})(\d{3})(\d{0,2})/,
      "$1.$2.$3-$4"
    );
  }

  // Atualiza o valor do input com a máscara
  input.value = cpfFormat;
};

function formatarCel(input) {
  let celFormat = input.value;

  // Remove tudo o que não é dígito
  celFormat = celFormat.replace(/\D/g, "");

  // Aplica a máscara
  if (celFormat.length <= 2) {
    celFormat = celFormat.replace(/(\d{2})/, "($1)");
  } else if (celFormat.length <= 6) {
    celFormat = celFormat.replace(/(\d{2})(\d{0,5})/, "($1) $2-");
  } else if (celFormat.length > 6) {
    celFormat = celFormat.replace(/(\d{2})(\d{0,5})(\d{0,5})/, "($1) $2-$3");
  }

  // Atualiza o valor do input com a máscara
  input.value = celFormat;
};

registerForm.addEventListener("submit", function(event) {
  event.preventDefault()
    const firstName = document.getElementById("inputFirstName").value;
    const lastName = document.getElementById("inputLastName").value;
    const cpf = document.getElementById("inputCPF").value;
    const cel = document.getElementById("inputCel").value;
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;

    var dadosCadastro = {
        firstNameDB: firstName,
        lastNameDB: lastName,
        cpfDB: cpf,
        celDB: cel,
        emailDB: email,
        passwordDB: password
    }

    alert("Usuário cadastrado com sucesso:", dadosCadastro);

    let usuarios = JSON.parse(localStorage.getItem('usuarios-cadastrados')) || [];
    usuarios.push(dadosCadastro);
    localStorage.setItem('usuarios-cadastrados', JSON.stringify(usuarios));   

    registerForm.reset();
}); 