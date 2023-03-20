const router = require('express').Router();
const { ProductTag } = require('../../models');
const {Product} = require('../../models')
const { Tag } = require ('../../models')



router.get('/', async (req, res) => {
  try{
    const tagData = await Tag.findAll({});
    res.status(200).json(tagData)
  }catch(err){
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if(!tagData){
      res.status(404).json({message: "Product not found"})
      return;
    }
res.status(200).json(tagData);
  }catch(err){
    res.status(500).json(err)
  }
 
});

// create a new tag
router.post('/', async (req, res) => {
 try {
   const createTag = await Tag.create({
     tag_name: req.body.tag_name,
   });
res.status(200).json(createTag)
 }catch(error){
   res.status(500).json(err)
 }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then((update) =>{
      res.status(200).json(update)
    })
    
  }catch(error){
    res.status(500).json(error);
  }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where:{
        id: req.params.id,
      },
    })
    res.status(200).json(Tag)
  } catch (error) {
    res.status(500).json(err)
  }
});

module.exports = router;
