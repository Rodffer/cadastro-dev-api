const router = require('express').Router();
const Dev = require('../models/Dev');
/*

  POST: Criar
  GET: Buscar
  PUT: Editar
  PATCH: Editar / Apenas 1 informação
  DELETE: Apagar

  C reate - POST
  R ead - GET
  U update - PUT/PATCH
  D elete - DELETE

  Status 
  500 - Erro interno no servidor
  200 - Sucesso
  201 - Criado
  400 - Erro
  404 - Não encontrado
  401 - Sem autorização
*/

router.post('/', async (req, res) => {
  try {

    const { firstName, lastName, email, role, level, stacks, description } = req.body;

    const dev = await new Dev({
      firstName,
      lastName,
      email,
      role,
      level,
      stacks,
      description
    });

    await dev.save();

    return res.status(201).json(dev);
    
  } catch (error) {
    return res.status(500).json({ error: error});
  }
});

module.exports = router;