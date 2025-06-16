import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Stock_Transfer = db.define('Stock_Transfers', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    transfer_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    from_warehouse_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'warehouses',
            key: 'id'
        }
    },
    to_warehouse_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'warehouses',
            key: 'id'
        }
    },
    transfer_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    expected_arrival_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    actual_arrival_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['draft', 'in_transit', 'received', 'cancelled']]
        }
    },
    total_items: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_value: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    },
    shipping_method: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tracking_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    created_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    approved_by: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    received_by: {
        type: DataTypes.UUID,
        allowNull: true,
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
    approved_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    received_at: {
        type: DataTypes.DATE,
        allowNull: true
    }

});

(async () => {
    await db.sync();
})();