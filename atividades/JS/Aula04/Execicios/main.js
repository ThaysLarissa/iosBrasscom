const listaP = ['Joaquim', ' José', ' Silva', ' Xavier']
console.log (listaP)

console.clear();
let a = listaP.pop(); //Tirando Xavier da lista
let b = listaP.unshift('Amanda'); //Adicionando Amanda na primeira posição
console.log(listaP);

console.clear();
let c = listaP.shift(); //Removendo a Amanda da lista
let d = listaP.push('Zuleica'); //Adicionando a Zuleica na última posição
console.log(listaP)

console.clear();
delete listaP[2]; //Removendo Silva da lista
let e = listaP.splice(2,0, 'Silvana')
console.log(listaP)

