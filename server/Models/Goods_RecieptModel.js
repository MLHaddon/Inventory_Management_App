import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Goods_Receipt = db.define('Goods_Receipts', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    receipt_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    purchase_order_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'purchase_orders',
            key: 'id'
        }
    },
    supplier_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'suppliers',
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
    receipt_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    invoice_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    delivery_note_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    total_items: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['pending', 'completed', 'partial']]
        }
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    received_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
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