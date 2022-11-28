const router = require('express').Router();

router.get('/status', (req, res) => {
  return res.status(200).json({ status: true, message: 'Up and running!!' });
});

module.exports = router;
