import sequelize from "sequelize";
import db from '../config/db.js';
const Supplier_Address = db.define('Supplier_Addresses', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    supplier_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Suppliers',
            key: 'id'
        }
    },
    address_type: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            isIn: [['billing', 'shipping', 'office']]
        }
    },
    address_line_1: {
        type: sequelize.STRING,
        allowNull: false
    },
    address_line_2: {
        type: sequelize.STRING,
        allowNull: true
    },
    city: {
        type: sequelize.STRING,
        allowNull: false
    },
    state_province: {
        type: sequelize.STRING,
        allowNull: false
    },
    postal_code: {
        type: sequelize.STRING,
        allowNull: false
    },
    country: {
        type: sequelize.STRING,
        allowNull: false
    },
    is_primary: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    },
    created_at: {
        type: sequelize.DATE,
        defaultValue: sequelize.NOW
    },
    updated_at: {
        type: sequelize.DATE,
        defaultValue: sequelize.NOW
    }

}, {
    freezeTableName: true
});

(async, () => {
    db.sync()
});