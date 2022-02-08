const router = require('express').Router();
const Dev = require('../models/Dev');
const yup = require('yup');

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

    let schema = yup.object().shape({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().email().required(),
      role: yup.string().required(),
      level: yup.string().required(),
      stacks: yup.array().required(),
      description: yup.string().required()
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ message: 'Erro de validação'});
    }

    const existsEmail = await Dev.exists({ email });

    if(existsEmail){
      return res.status(400).json({ message: 'E-mail indisponível'});
    }

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
    console.log(error);
    return res.status(500).json({ error: error});
  }
});

module.exports = router;