const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');
const { restore } = require('../../models/Tag');



// get all products
router.get('/', async (req, res) => {
  try{
    const productData = await Product.findAll({
        include: Category,
        include: Tag,
    });
    res.status(200).json(productData)
  }catch(err){
    res.status(500).json(err)
  }
 
});

// get one product
router.get('/:id', async (req, res) => {
  try{
    const productData = await Product.findByPk(req.params.id, {
        include: Category,
       include: Tag,
    })
    res.status(200).json(productData)
  }catch(err){
    res.status(400).json(err)
  }

});

// // create new product
router.post('/', async (req, res) => {
  try{
  const createProduct = await Product.create({  
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    category_id: req.body.category_id
  })
  res.status(200).json(createProduct)
}catch(err){
  res.status(500).json(err)
 }})



router.put('/:id', async (req, res) => {
  try{
  // update product data
  const product = await Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    res.status(200).json(product)
  }catch(err){
    res.status(500).json(err)
  }
 
});


router.delete ('/:id', async(req, res) => {
  try{
    const deleteProduct = await Product.destroy({
      where:{
        id: req.params.id,
      },
    }) 
    res.status(200).json(deleteProduct)
  }catch(err){
    res.status(500).json(err)
  }

});

module.exports = router;

