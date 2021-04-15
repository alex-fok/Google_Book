const router = require('express').Router();
const db = require('../models');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.route('/saved')
  .get((req,res) => {
    db.Book
    .find({})
    .sort({ date: -1 })
    .then(books => res.json(books))
    .catch(err => res.status(422).json(err));
  })
  
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;