import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const { DataTypes } = Sequelize;

const Sales_Order_Line = db.define('Sales_Order_Lines', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sales_order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Sales_Orders',
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
    quantity_shipped: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    unit_price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    discount_percentage: {
        type: DataTypes.DECIMAL(5,2)
    },
    discount_amount: {
        type: DataTypes.DECIMAL(10,2)
    },
    total_amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    tax_rate: {
        type: DataTypes.DECIMAL(5,2)
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
    await db.sync()
})();