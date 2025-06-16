import sequelize from "sequelize";
import db from '../config/db.js';

const { DataTypes } = sequelize();
const Supplier_Product = db.define('Supplier_Products',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Suppliers',
            key: 'id'
        }
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'id'
        }
    },
    supplier_sku: {
        type: DataTypes.STRING
    },
    supplier_product_name: {
        type: DataTypes.STRING
    },
    cost_price: {
        type: DataTypes.DECIMAL(10,2)
    },
    minimum_order_quantity: {
        type: DataTypes.INTEGER
    },
    lead_time_days: {
        type: DataTypes.INTEGER
    },
    is_preferred_supplier: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    last_purchase_date: {
        type: DataTypes.DATE
    },
    last_purchase_price: {
        type: DataTypes.DECIMAL(10,2)
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

}, {
    freezeTableName: true
});

(async () => {
    db.sync();
})();