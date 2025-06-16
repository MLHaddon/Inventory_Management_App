import sequelize from "sequelize";
import db from "../../database/config.js";

const { DataTypes } = sequelize;

const Data_Sync_Status = db.define('Data_Sync_Status', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sync_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    external_system: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_sync_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    next_sync_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    sync_frequency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    records_processed: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    records_failed: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    sync_status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    error_details: {
        type: DataTypes.JSON,
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
    freezeTablName: true
});

(async () => {
    await db.sync();
})();