import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Purchase_Order_Line = db.define('Purchase_Order_Lines', {
id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    purchase_order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Purchase_Orders',
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
    quantity_ordered: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity_received: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    unit_cost: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    total_cost: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    tax_rate: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    },
    expected_delivery_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    notes: {
        type: DataTypes.TEXT
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

(async () => {
    await db.sync();
});