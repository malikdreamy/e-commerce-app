const sequelize = require('../config/connection');
const Product = require('../models/Product');
const Category = require('../models/Category');
const Tag = require('../models/Tag');
const ProductTag = require('../models/ProductTag');

// Define associations
Product.belongsTo(Category, {
  foreignKey: {
    name: 'category_id',
    allowNull: false,
  },
});
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' });
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });

// Sync database
(async () => {
  await sequelize.sync()
  console.log('Tables synced successfully!');
})();

module.exports = { Category, Product, Tag, ProductTag };
