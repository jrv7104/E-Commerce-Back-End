const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// // // The `/api/tags` endpoint


router.get('/', (req, res) => {
      // find all tags
      //method starts findAll with Tags
    Tag.findAll({
        include: Product,
        //Tag includes information from Product route
        through: ProductTag
        //through allows user to combine Tag and Product for ProductTag.js results        
      }).then(tag => res.json(tag))
    });

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // // be sure to include its associated Products
    
    Tag.findOne({
      where: {
        id: req.params.id
      },
      //see findAll reference for ProductTag
      include: Product,
      through: ProductTag
    }).then(tag => res.json(tag))
  });

  router.post('/', (req, res) => {

    Tag.create(req.body).then(newTag => res.json(newTag))
  });

  router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Tag.findOne({  
      where: {
          id: req.params.id
      },
    }).then(updateTag => res.json(updateTag))
  });

  router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Tag.destroy({
      where: {
        id: req.params.id
      },
    }).then(tag => res.json(tag))
  });

module.exports = router;