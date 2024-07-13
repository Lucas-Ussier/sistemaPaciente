document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Limpa a mensagem de erro
    document.getElementById('error-message').textContent = '';

    // Valida os campos de entrada
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Please fill in all fields.';
    } else {
        // Aqui você pode adicionar a lógica de autenticação
        // Por exemplo, enviar os dados para um servidor para verificação
        // e, se tudo estiver correto, redirecionar para uma nova página
        if (username === 'admin' && password === 'admin') {
            window.location.href = 'portalMedico.html';
        }
    }
});