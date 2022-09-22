const friend = {nome:'Justin', sexo:'M', peso: 75, muscular(m=0){
    this.peso += m;
    console.log('Ganhou massa muscular.');
}}
friend.muscular(5);
console.log(`${friend.nome} pesa ${friend.peso}kg.`);