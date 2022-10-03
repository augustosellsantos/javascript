try {
    // É excutado quando não há erros.
    //console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou um erro');
    console.log('Fechei o arquivo');
    try {
        console.log(b);
    } catch (e) {
        console.log('Deu erro');
    } finally {
        console.log('Também sou finally')
    }
} catch (e) {
    // É excultado quando há erros.
    console.log('Tratando o erro');
} finally {
    // Sempre
    console.log('FINALLY: Eu sempre sou executado')
}