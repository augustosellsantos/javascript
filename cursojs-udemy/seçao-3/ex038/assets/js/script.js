function escopo () {
    const novaTarefa = document.querySelector('#nova-tarefa')
    const adicionaTarefas = document.querySelector('.adiciona-tarefas')
    const lista = document.querySelector('.lista')

    adicionaTarefas.addEventListener('click', function(event) {
        if (!novaTarefa.value) return;
    });
}
escopo();