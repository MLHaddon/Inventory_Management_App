import sequelize from "sequelize";
import db from '../config/db.js';

const { DataTypes } = sequelize;

const Warehouse = db.define('Warehouses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    address_line_1: {
        type: DataTypes.STRING
    },
    address_line_2: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    state_province: {
        type: DataTypes.STRING
    },
    postal_code: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    manager_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {
    freezeTableName: true
});

(async, () => {
    db.sync();
})();