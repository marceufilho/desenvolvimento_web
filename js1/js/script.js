let lista = [1, 2, 3, 4];
lista.push('novo');
console.log(lista.length);
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.indexOf(2));
var mensagem = 'olá';
{
    var mensagem = 'adeus'
    console.log(mensagem);
}
console.log(mensagem);

let mensagem2 = 'como';
{
    let mensagem2 = 'adeus'
    console.log(mensagem2);
}
console.log(mensagem2);

const mensagem3 = 'constante';
{
    const mensagem3 = 'tentando mudar';
    console.log(mensagem3);
}
console.log(mensagem3);

//mensagem3 = 'mudar';