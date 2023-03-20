// const { Product, Category, Tag, ProductTag } = require('./index');

// function createAssociations() {
//   // Products belong to a Category
//   Product.belongsTo(Category, {
//     foreignKey: {
//       name: 'category_id',
//       allowNull: false
//     }
//   });

//   // Categories have many Products
//   Category.hasMany(Product, {
//     foreignKey: 'category_id'
//   });

//   // Products belong to many Tags (through ProductTag)
//   Product.belongsToMany(Tag, {
//     through: ProductTag,
//     foreignKey: 'product_id'
//   });

//   // Tags belong to many Products (through ProductTag)
//   Tag.belongsToMany(Product, {
//     through: ProductTag,
//     foreignKey: 'tag_id'
//   });
// }

// module.exports = createAssociations;
