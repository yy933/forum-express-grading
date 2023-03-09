'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate (models) {
      // define association here
      Comment.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' })
      Comment.belongsTo(models.User, { foreignKey: 'userId' })
    }
  };
  Comment.init({
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
    underscored: true
  })
  return Comment
}
