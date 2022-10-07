// Declaração de função (Function hoisting)
sayHi();
function sayHi() {
    console.log('Oi');
}
// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
}
souUmDado();
// Arrow function
const functionArrow = () => {
    console.log('Sou uma arrow function.')
}
functionArrow();
// Dentro de um objeto
const objects = {
    say() {
        console.log('Estou falando...');
    }
};
objects.say();