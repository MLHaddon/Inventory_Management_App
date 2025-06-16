import sequelize from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = sequelize();

const Product_Variant = db.define('Product_Variants', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    parent_product_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'id'
        }
    },
    sku: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    barcode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    variant_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false
    },
    material: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost_price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    selling_price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    weight: {
        type: DataTypes.DECIMAL(8,3),
        allowNull: false
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
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
});