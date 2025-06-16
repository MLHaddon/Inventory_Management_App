import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Goods_Receipt_Line = db.define('Goods_Receipt_Lines', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    goods_receipt_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    purchase_order_line_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity_received: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unit_cost: {
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
    storage_location_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    condition_status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    notes: {
        type: DataTypes.TEXT,
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

(async () => {
    await db.sync();
})();