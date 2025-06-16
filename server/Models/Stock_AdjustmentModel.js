import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;
const Stock_Adjustment = db.define('stock_Adjustments', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    adjustment_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    warehouse_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'warehouses',
            key: 'id'
        }
    },
    adjustment_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['physical_count', 'damage', 'theft', 'correction']]
        }
    },
    reason: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    total_value_adjustment: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['draft', 'pending_approval', 'approved', 'processed']]
        }
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
    processed_by: {
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
    processed_at: {
        type: DataTypes.DATE,
        allowNull: true
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