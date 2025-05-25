function validarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome === '') {
    alert('Por favor, preencha o campo Nome.');
    return false;
  }
  if (!regexEmail.test(email)) {
    alert('Por favor, insira um e-mail válido.');
    return false;
  }
  return true;
}