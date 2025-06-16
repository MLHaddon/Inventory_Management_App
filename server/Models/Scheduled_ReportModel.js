import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const { DataTypes } = Sequelize;

const Scheduled_Report = db.define('Scheduled_Report', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    report_template_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'report_templates',
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    schedule_frequency: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['daily', 'weekly', 'monthly']]
        }
    },
    schedule_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    schedule_day: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    recipients: {
        type: DataTypes.JSON,
        allowNull: false
    },
    format: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['pdf', 'excel', 'csv']]
        }
    },
    last_run_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    next_run_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }

}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();