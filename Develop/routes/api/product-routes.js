const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
//   // find all products
Product.findAll({
    include: [Category, Tag]
  }).then(product =>   res.json(product))
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
    }).then(categories => res.json(categories))
  });
  

//   router.post('/', (req, res) => {

//     Product.create(req.body).then(newProduct => res.json(newProduct))
//   });

// // // update product
// // router.put('/:id', (req, res) => {
// //   // update product data
// //   Product.update(req.body, {
// //     where: {
// //       id: req.params.id,
// //     },
// //   })
// //     .then((product) => {
// //       // find all associated tags from ProductTag
// //       return ProductTag.findAll({ where: { product_id: req.params.id } });
// //     })
// //     .then((productTags) => {
// //       // get list of current tag_ids
// //       const productTagIds = productTags.map(({ tag_id }) => tag_id);
// //       // create filtered list of new tag_ids
// //       const newProductTags = req.body.tagIds
// //         .filter((tag_id) => !productTagIds.includes(tag_id))
// //         .map((tag_id) => {
// //           return {
// //             product_id: req.params.id,
// //             tag_id,
// //           };
// //         });
// //       // figure out which ones to remove
// //       const productTagsToRemove = productTags
// //         .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
// //         .map(({ id }) => id);

// //       // run both actions
// //       return Promise.all([
// //         ProductTag.destroy({ where: { id: productTagsToRemove } }),
// //         ProductTag.bulkCreate(newProductTags),
// //       ]);
// //     })
// //     .then((updatedProductTags) => res.json(updatedProductTags))
// //     .catch((err) => {
// //       // console.log(err);
// //       res.status(400).json(err);
// //     });
// // });

// // router.delete('/:id', (req, res) => {
// //   // delete one product by its `id` value
// //   Product.destroy({
// //     where: {
// //       id: req.params.id,
// //     },
// //   })
// //   .then((deletedProduct) => {
// //     res.json(deletedProduct);
// //   })
// //   .catch((err) => res.json(err));
// // });

module.exports = router;
