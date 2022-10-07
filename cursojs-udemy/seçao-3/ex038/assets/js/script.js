
    const novaTarefa = document.querySelector('#nova-tarefa');
    const adicionaTarefas = document.querySelector('.adiciona-tarefas');
    const lista = document.querySelector('.lista');

    function criaLi() {
        const li = document.createElement('li');
        return li;
    }
    novaTarefa.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            if (!novaTarefa.value) return;
            criaTarefa(novaTarefa.value);
        }
    });
    function clearTarefa() {
        novaTarefa.value = '';
        novaTarefa.focus();
    }
    function createButtonDelete(li) {
        const buttonDelete = document.createElement('button');
        buttonDelete.innerText = 'Apagar';
        buttonDelete.setAttribute('class', 'apagar');
        buttonDelete.setAttribute('title', 'Apaga tarefa');
        li.innerText += ' ';
        li.appendChild(buttonDelete);
    }
    function criaTarefa(textoTarefas) {
        const li = criaLi();
        li.innerText = textoTarefas;
        lista.appendChild(li);
        clearTarefa();
        createButtonDelete(li);
        salvarTarefas();
    }
    adicionaTarefas.addEventListener('click', function() {
        if (!novaTarefa.value) return;
        criaTarefa(novaTarefa.value);
    });
    document.addEventListener('click', function(event) {
        const element = event.target;
        if (element.classList.contains('apagar')) {
            element.parentElement.remove();
            salvarTarefas();
        }
    });
    function salvarTarefas() {
        const liTarefas = lista.querySelectorAll('li');
        const listaDeTarefas = [];

        for (let listas of liTarefas) {
            let tarefaTexto = listas.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaDeTarefas.push(tarefaTexto);
        }
        const listaJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('lista', listaJSON);
    }
    function adicionaTarefasSalvas() {
        const lista = localStorage.getItem('lista');
        const listaDeTarefas = JSON.parse(lista);

        for (let listas of listaDeTarefas) {
            criaTarefa(listas);
        }
    }
    adicionaTarefasSalvas();
