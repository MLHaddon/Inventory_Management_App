import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Inventory_Snapshot = db.define('Inventory_Snapshots', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    snapshot_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    product_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'id'
        }
    },
    warehouse_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Warehouses',
            key: 'id'
        }
    },
    quantity_on_hand: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity_reserved: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity_available: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unit_cost: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    total_value: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    indexes: [
        {
            fields: ['snapshot_date', 'product_id', 'warehouse_id']
        }
    ]
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();