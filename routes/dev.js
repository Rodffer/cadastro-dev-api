const router = require('express').Router();

router.get('/', async (req, res) => {
  res.json({ message: 'Olá Dev'});
});

module.exports = router;