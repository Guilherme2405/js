/*
Exercício: Criando e manipulando objetos
Criação de um objeto de pessoa: Crie um objeto chamado pessoa com as seguintes propriedades:

nome (uma string com o nome da pessoa)

idade (um número representando a idade da pessoa)

email (uma string com o e-mail da pessoa)

endereços (um array com dois objetos, sendo cada objeto um endereço contendo rua, bairro e cidade)

Adição de um novo endereço: Adicione um novo objeto de endereço ao array endereços da pessoa. O novo endereço deve ter valores fictícios para rua, bairro e cidade.

Acesso e modificação de dados: Acesse e mostre no console:

O nome da pessoa.

A cidade do primeiro endereço.

A idade da pessoa, e depois modifique o valor da idade para 30 e mostre o novo valor.

Função para exibir as informações: Crie uma função chamada exibirInformacoes que recebe o objeto pessoa e imprime no console as informações de nome, idade, e os endereços de forma legível.
 */


function Acesso(nome,idade,email,endereco) {
    this.nome = nome
    this.idade = idade
    this.email = email
    this.endereco = [endereco]

}
Object.defineProperty(p1)


const p1 = new Acesso ('guilherme',23,'vikigns@outlook.com',this.endereco = ['Avenida José Borges Monteiro','bonito','MG'])

console.log(p1)
