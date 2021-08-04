const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll().then((categoryData) => {
    res.json(categoryData);
  });
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findAll({

    order: [''],
    where: {
  // be sure to include its associated Products
  is_something: true
    },
  }).then(categoryData) => {
    res.json(categoryData);
  };

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(newCategory) => {
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      // All the fields you can update and the data attached to the request body.
      id: req.body.id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
)
.then((updatedCategory) => {
  res.json(updatedCategory);
})
.catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
