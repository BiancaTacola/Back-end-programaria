const mongoose = require('mongoose');

const MulherSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    required: true,
  },
  citacao: {
    type: String,
    required: true,
  },
  minibio: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('diva', MulherSchema);

//POST
async function criaMulher(request, response) {
  const novaMulher = new MulherSchema({
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao,
  });
  await novaMulher.save();
  response.json(mulheres);
}

//PATCH
async function corrigeMulher(request, response) {
  const { id } = request.params;
  const { nome, imagem, minibio, citacao } = request.body;
  const mulher = await MulherSchema.findByIdAndUpdate(
    id,
    { nome, imagem, minibio, citacao },
    { new: true }
  );
  response.json(mulher);
}
