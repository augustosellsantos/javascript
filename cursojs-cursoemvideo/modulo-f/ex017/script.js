let numb = [6,3,12,9]
numb.push(15)
numb[5]=18
numb.sort()
/*for(let depois = 0; depois < numb.length; depois ++ ) {
    console.log(`A posição ${depois} tem o valor ${numb[depois]}`);
}*/
for(let depois in numb) {
    console.log(`A posição ${depois} tem o valor ${numb[depois]}.`);
}
let posicao = numb.indexOf(4);
if (posicao === -1) {
    console.log(`O valor não foi encontrado!`);
} else {
    console.log(`O valor está na posição ${posicao}.`);
}
