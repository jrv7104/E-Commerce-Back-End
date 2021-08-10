// const router = require('express').Router();
// const { Tag, Product, ProductTag, Category } = require('../../models');

// // // The `/api/tags` endpoint


// router.get('/', (req, res) => {
//     Tag.findAll({
//         include: [Category, Product]
//       }).then(product => res.json(product))
//     });

// router.get('/:id', (req, res) => {
//     // find one category by its `id` value
//     // // be sure to include its associated Products
    
//     Tag.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [Product, Category]
//     }).then(tags => res.json(tags))
//   });

// router.post('/', (req, res) => {

//     Product.create(req.body).then(newProduct => res.json(newProduct))
// });
// //   // create a new tag

// // router.put('/:id', (req, res) => {
// //   // update a tag's name by its `id` value
// //   Product.update(
// //     {
// //       id: req.body.id,
// //     },
// //     {where: {
// //       id: req.params.id,
// //     },
// //   }
// // )
// // .then(updatedProductTag) => {
// //   res.json(updatedProductTag);
// // })
// // .catch((err) => res.json(err));
// // });

// // router.delete('/:id', (req, res) => {
// //   // delete on tag by its `id` value
// //   ProductTag.destroy({
// //     where: {
// //       id: req.params.id,
// //     },
// //   })
// //   .then((deletedProductTag) => {
// //     res.json(deletedProductTag);
// //   })
// //   .catch((err) => res.json(err));
// // });

// // module.exports = router;
