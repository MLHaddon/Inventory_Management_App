import sequelize from "sequelize";
import db from '../config/db.js';

const { DataTypes } = sequelize;

const Stock_Level = db.define('Stock_Levels', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'id'
        }
    },
    warehouse_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Warehouses',
            key: 'id'
        }
    },
    storage_location_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Storage_Locations',
            key: 'id'
        }
    },
    quantity_on_hand: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    quantity_reserved: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    quantity_available: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    quantity_on_order: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    last_count_date: {
        type: DataTypes.DATE
    },
    last_movement_date: {
        type: DataTypes.DATE
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
    await db.sync();
})();