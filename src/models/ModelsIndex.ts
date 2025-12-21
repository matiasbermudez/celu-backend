import { User } from './User.model'
import { Product } from './Product.model'
import { Wishlist } from './Wishlist.model'

// MANY TO MANY
User.belongsToMany(Product, {
  through: Wishlist,
  foreignKey: 'userId',
})

Product.belongsToMany(User, {
  through: Wishlist,
  foreignKey: 'productId',
})