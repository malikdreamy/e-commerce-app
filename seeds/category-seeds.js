const sequelize = require('../config/connection');
const Category = require('../models/Category');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];
const seedCategories = async () => {
    await Category.bulkCreate(categoryData);
    console.log('Categories seeded');
  }
  seedCategories();
module.exports = { seedCategories };

