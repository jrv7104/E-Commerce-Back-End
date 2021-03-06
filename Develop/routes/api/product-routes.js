const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
//   // find all products
Product.findAll({
    include: [Category, Tag]
  }).then(product => res.json(product))
});
  // be sure to include its associated Category and Tag data

  router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // // be sure to include its associated Products
    
    Product.findOne({
      where: {
        id: req.params.id
      },
      include: [Category, Tag]
    }).then(product => res.json(product))
  });
  
  router.post('/', (req, res) => {

    Product.create(req.body).then(newProduct => res.json(newProduct))
  });
  
  router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Product.update(req.body, {  
      where: {
          id: req.params.id
      },
    }).then(updateProduct => res.json(updateProduct))
  });

  router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Product.destroy({
      where: {
        id: req.params.id
      },
    }).then(product => res.json(product))
  });


module.exports = router;
