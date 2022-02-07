const router = require('express').Router();

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

*/

router.post('/', async (req, res) => {
  res.json({ message: 'Olá Dev'});
});

module.exports = router;