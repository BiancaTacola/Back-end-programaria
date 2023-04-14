// aprendendo o array (listas)

const express = require('express');
const router = express.Router();

const app = express();
const porta = 3334;

const mulheres = [
  {
    nome: 'Bianca Souza Tacola',
    imagem: 'https://github.com/account',
    minbio: 'mulher corajosa em busca de seus sonhos',
  },
  {
    nome: 'Mel Souza Tacola',
    imagem:
      'https://blog-static.petlove.com.br/wp-content/uploads/2022/11/10133544/nomes-para-Poodle-Petlove.jpg',
    minibio: 'Uma idosa cheia de simpatia ',
  },
];

function mostraMulheres(request, response) {
  response.json(mulheres);
}

function mostraPorta() {
  console.log('Servidor criado e rodando na porta', porta);
}

app.use(router.get('/mulheres', mostraMulheres));
app.listen(porta, mostraPorta);
