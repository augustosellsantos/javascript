function parimpar(numb) {
    if (numb%2 === 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
console.log(parimpar(222));

function soma(numb1=0, numb2=0) {
    return numb1 + numb2
}
console.log(soma(7));