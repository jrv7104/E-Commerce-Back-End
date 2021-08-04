const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  ProductTag.findAll().then((productTagData) => {
    res.json(productTagData);
  });
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Category.findAll({
  // be sure to include its associated Product data

  order: [''],
  where: {

    is_something: true
  },
}).then(productTagData) => {
  res.json(productTagData);
};

router.post('/', (req, res) => {
  // create a new tag
  Product.create(req.body)
  .then(newProductTag) => {
    res.json(newProductTag);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Product.update(
    {
      id: req.body.id,
    },
    {where: {
      id: req.params.id,
    },
  }
)
.then(updatedProductTag) => {
  res.json(updatedProductTag);
})
.catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  ProductTag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedProductTag) => {
    res.json(deletedProductTag);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
