import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Integration_Log = db.define('Integration_Logs', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    api_key_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'api_keys',
            key: 'id'
        }
    },
    integration_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endpoint: {
        type: DataTypes.STRING,
        allowNull: false
    },
    method: {
        type: DataTypes.STRING,
        allowNull: false
    },
    request_data: {
        type: DataTypes.JSON,
        allowNull: true
    },
    response_data: {
        type: DataTypes.JSON,
        allowNull: true
    },
    status_code: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    response_time_ms: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    error_message: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ip_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_agent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    processed_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    created_at: {
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