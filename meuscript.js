const nome = prompt('Digite o seu nome:')
const idade = prompt('Digite sua idade:')
// document.write('<h1>Olá ' + nome + ', tudo bem? Estou vendo aqui que você tem ' + idade + ' anos.</h1>')
const divi = document.getElementById('divi')
const h1 = document.createElement('h1')

h1.innerText = ('Olá ' + nome + ', tudo bem? Estou vendo aqui que você tem ' + idade + ' anos.')
divi.appendChild(h1)