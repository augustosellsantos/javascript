function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
}
try {
    const data = new Date('17-06-1991 08:45:40');
    const hora = retornaHora(22);
    console.log(hora);
} catch(err) {
    // Tratar o erro
} finally {
    console.log('Tenha um excelente dia!')
}