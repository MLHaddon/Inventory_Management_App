import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Cycle_Count = db.define('Cycle_Counts', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    count_number: {
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
    count_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['full', 'partial', 'abc_analysis', 'random']]
        }
    },
    scheduled_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    started_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    completed_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['scheduled', 'in_progress', 'completed', 'cancelled']]
        }
    },
    total_items_planned: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    total_items_counted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    variance_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    variance_value: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false,
        defaultValue: 0.00
    },
    assigned_to: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
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

(async () => {
    await db.sync();
})();