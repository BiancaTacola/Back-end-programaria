const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

//Aprendendo sobre objetos os blocos de objetos, lembre se separar por virgula
//o request e response é pra quando estou usando o http, eu preciso chamar eles
// o response.json é por que temos blocos de objetos para apresentar
function mostraMulher(request, response) {
  response.json({
    nome: 'Bianca Souza Tacola',
    imagem: 'https://github.com/account',
    minibio: 'Mulher corajosa em busca de seus sonhos',
  });
}

function mostraPorta() {
  console.log('Servidor criado e rodando na porta', porta);
}

app.use(router.get('/mulher', mostraMulher));
app.listen(porta, mostraPorta);
