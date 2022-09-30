// Encontrar o erro

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    }
    return x + y;
}
try {
    console.log(soma(17, 22));
    console.log(soma('17', 22));
} catch(err) {
    //console.log(err);
    console.log('Algo atraente para o usuário final.');
}