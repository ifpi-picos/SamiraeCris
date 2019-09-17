//aula dia  03/09 //

//declaraçao de funçao://

function raiz(numero) {


    return numero * numero;
}
const result = raiz(7);
console.log("Raiz é", result);

//declaraçao de tamanho://

const tamanho = function (palavra) {
    return palavra.length
}
console.log(tamanho('Samiralinda'))

// declaraçao de objetos:// 

const aluno = { nome: 'Mirinha', idade: 16 };
console.log(aluno.nome);
// para alterar um valor://

aluno.idade = 17;
console.log(aluno.idade);
//para declarar um array://

const carros = ['Ferrari', 'Lamborguini', 'BMW', 'UNO', 'Toyota', 'Chevrolet', 'Volkwagen'];
//para testar://

console.log(carros[3]);
// para substituir um elemento por outro://

carros[1] = 'Honda';
// para adicionar um novo elemento://

carros.push('Tesla');
// para remover um elemento://

carros.splice(1, 1);
// para exibir o ultimo elemento do array://

console.log(carros[carros.length - 1]);

console.log(carros)

// aula dia 04/09 //

//para percorrer um array com for padrão://

for (let i = 0; i < carros.length; i++) {
    console.log(carros[i]);
}
// percorrendo os elementos de um array com forEach://*

carros.forEach(function (carro) {
    console.log('forEach:', carro);
});

// percorrendo os elementos de um array com contador://

for (let i = 0; i < carros.length; i++) {
    console.log('Carro' + (i + 1) + ':', carros[i]);
}
const alunos = [{ nome: 'Jhon', idade: 17 },
{ nome: 'Zoe', idade: 18 },
{ nome: 'Steve', idade: 30 },
{ nome: 'Megan', idade: 15 }];

// filtrar (selecionando) todos os alunos maiores de idade://
const alunosAdultos = [];
alunos.forEach(function (aluno) {
    if (aluno.idade >= 18) {
        alunosAdultos.push(aluno);
    }
});
console.log('Alunos adultos:', alunosAdultos);

// filtrando (selecionando) Filter //

const alunosMaiores = alunos.filter(function (aluno) {
    return aluno.idade >= 18;

});
console.log('Alunos maiores de idade:', alunosMaiores);

// (==) comparar valores, (===) comparar valores e tipos

//Para retornar um nome(Ruan) e um sobrenome(Silva) em seguida://
function getNome(callback) {
    setTimeout(function () {
        return callback('Ruan');
    }, 2000)
}
function getSobrenome(callback) {
    setTimeout(function () {
        return callback('Silva');
    }, 1000)
}
getNome(function (retornoNome) {
    getSobrenome(function (retornoSobreNome) {
        console.log('nome completo: ', retornoNome + ' ' + retornoSobreNome)
    })

})
// callback: função que eu passo como parâmetro para outra função.//

// Para testar a função Promise://

function getNomePromise(sucesso) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (sucesso) {
                resolve('Mateus');
            }
            else {
                reject('Deu erro!!')
            }
        }, 1000);

    });
}

getNomePromise(true).then(function(retorno){
    console.log('Sucesso: ',retorno)
}).catch(function(err){
    console.error('Error:', err);
})