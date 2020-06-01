const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create our User model
class User extends Model {}

//define table columns and configuration
