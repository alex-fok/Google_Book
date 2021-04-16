const axios = require('axios');
const router = require('express').Router();
const db = require('../../models');
// id, title, snippet, authors, image
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

router.route('/saveBook')
  .post(async(req, res) => {
    const {id, title, snippet, authors, image} = req.body;
    const answer = await db.Book.create({
      _id: id,
      title,
      snippet,
      authors,
      image
    });
    console.log(answer);
  })

module.exports = router;