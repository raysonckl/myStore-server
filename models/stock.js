'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Stock extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Stock.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        product_id: {
            allowNull: false,
            type: DataTypes.BIGINT.UNSIGNED,
            foreignKey: true
        },
        quantity: {
            allowNull: false,
            type: DataTypes.BIGINT.UNSIGNED,
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        sequelize,
        modelName: 'Stock',
        tableName: 'stocks',
        underscored: true
    });
    return Stock;
};