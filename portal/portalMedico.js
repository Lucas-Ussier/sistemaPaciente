function showModal() {
    const modal = document.querySelector('.modalCadastro');
    modal.classList.add('ativo');
}

function cadastrarPaciente() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const medicamento = document.getElementById('medicamento').checked;
    const paciente = { nome, idade, medicamento };
    const pacienteTr = montarTr(paciente);
    const tabela = document.querySelector('table');
    tabela.appendChild(pacienteTr);
    hideModal();
}

function montarTr(paciente) {
    const pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');
    var pacienteMed = '';
    if (paciente.medicamento) {
        pacienteMed = 'Sim';
    } else {
        pacienteMed = 'Não';
    }
    pacienteTr.innerHTML = `
        <td>${paciente.nome}</td>
        <td>${paciente.idade}</td>
        <td>${pacienteMed}</td>
        <td><button onclick="detalhes()">Detalhes</button></td>
    `;
    return pacienteTr;
}

function hideModal() {
    const modal = document.querySelector('.modalCadastro');
    modal.classList.remove('ativo');
}

function detalhes() {
    alert('Detalhes');
}