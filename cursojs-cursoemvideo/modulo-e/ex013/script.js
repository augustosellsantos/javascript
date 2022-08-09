function escopo() {
    let teste = 1;
    while (teste <= 7) {
        console.log('Tudo ok');
        teste++
    }
    let teste2 = 5
    do {
        console.log(`Passo ${teste2}`)
        teste2++
    } while (teste2 <=10)
}
escopo();