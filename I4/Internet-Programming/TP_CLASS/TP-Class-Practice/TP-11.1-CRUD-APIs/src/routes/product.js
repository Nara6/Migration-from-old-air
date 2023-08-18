var express = require('express');
// const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middleware/authentication');
// const { } = require('../schemas');
var router = express.Router();
const productService = require('../services/product');
const upload = require("../middleware/upload")

router.get('/all/:category?/:item?', async (req, res) => {

  const { category, item } = req.params;
  console.log(category,item);
  const result = await productService.findAll(category, item);
  res.json(result);
})

router.get('/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  const result = await productService.findById(id);
  res.json(result);
})

router.post('/create', auth.ensureSignedIn,upload.single('imageUrl') , async (req, res, next) => {
  const newProduct = req.body
  const file = req.file.path
  const result = await productService.create(newProduct,file)
  res.json(result);
})

router.post('/update/:id', auth.ensureSignedIn, async (req, res, next) => {
  const {id} = req.params 
  const newProduct = req.body
  const result = await productService.update(id, newProduct) 
  res.json(result);
})

router.post('/delete/:id', auth.ensureSignedIn, async (req, res, next) => {
  const {id} = req.params
  const result = await productService.remove(id)
  res.json(result);
})

module.exports = router