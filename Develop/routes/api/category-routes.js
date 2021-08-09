const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  }).then(categories => res.json(categories))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // // be sure to include its associated Products
  
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(categories => res.json(categories))
});

router.post('/', (req, res) => {

  Category.create(req.body).then(newCat => res.json(newCat))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.findOne({  
    where: {
        id: req.params.id
    },
  }).then(updateCat => res.json(updateCat))
});


router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
  }).then(categories => res.json(categories))
});

module.exports = router;
