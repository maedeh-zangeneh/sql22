
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'userss', 
      key: 'id',
    }
  }
}, {
  tableName: 'posts',
});

module.exports = Post;
