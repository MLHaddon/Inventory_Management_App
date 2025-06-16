import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Stock_movement = db.define('stock_moevements', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        }
    },
    warehouse_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'warehouses',
            key: 'id'
        }
    },
    storage_location_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'storage_locations',
            key: 'id'
        }
    },
    movement_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reference_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reference_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unit_cost: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    total_cost: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    batch_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    serial_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    expiry_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    processed_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    processed_at: {
        type: DataTypes.DATE,
        allowNull: false
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
    }

}, {
    freezeTableName: true
});

(async, () => {
    db.sync();
})