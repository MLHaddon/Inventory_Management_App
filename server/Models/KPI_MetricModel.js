import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const KPI_Metric = db.define('KPI_Metrics', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    metric_name: {
        type: DataTypes.STRING
    },
    metric_value: {
        type: DataTypes.DECIMAL(15,4)
    },
    measurement_period: {
        type: DataTypes.STRING
    },
    period_start: {
        type: DataTypes.DATE
    },
    period_end: {
        type: DataTypes.DATE
    },
    warehouse_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'warehouses',
            key: 'id'
        }
    },
    category_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'categories',
            key: 'id'
        }
    },
    calculated_at: {
        type: DataTypes.DATE
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();