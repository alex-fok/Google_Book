const axios = require('axios');
const router = require('express').Router();

// /api/search
router.route('/search')
  .get((req, res) => {
    const {title} = req.query;
    axios(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
    .then(response => {
      const results = response.data.items;
      results ? res.json(results) : res.json([]);
    });
  })

module.exports = router;