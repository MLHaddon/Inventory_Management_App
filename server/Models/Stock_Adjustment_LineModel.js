import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Stock_Adjustment_line = db.define('stock_adjustment_lines', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stock_adjustment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'stock_adjustments',
            key: 'id'
        }
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id'
        }
    },
    storage_location_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'storage_locations',
            key: 'id'
        }
    },
    expected_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    actual_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity_difference: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unit_cost: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    total_adjustment: {
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
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
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
});