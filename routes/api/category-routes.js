const router = require('express').Router();
const { Category, Product } = require('../../models');



router.get('/', async (req, res) => {
  // find all categories
  try { 
    const categoryData = await Category.findAll({
      include: Product,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
    const categoryData = await Category.findByPk(req.params.id,{
      include: Product,
    });
    res.status(200).json(categoryData)
  } catch(err){
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  //create new category
  try{
    const createCategory = await Category.create({
      category_name: req.body.category_name,
    })
    res.status(200).json(createCategory);
  }catch(err){
    res.status(400).json(err);
  }

});

router.put('/:id', async (req, res) => {
  try{
    const categoryData = await Category.update({"category_name": req.body.category_name},{
      where:{
        id: req.params.id,
        
      }
    })
    res.status(200).json(categoryData);
  } catch(err){
    res.status(500).json(err)
  }

});

router.delete('/:id', async (req, res) => {
  try{
    const deleteCategory = await Category.destroy({
      where:{
        id: req.params.id,
      }
    })
    res.status(200).json(deleteCategory)
  }catch(err){
    res.status(500).json(err)
  }

});

module.exports = router;

