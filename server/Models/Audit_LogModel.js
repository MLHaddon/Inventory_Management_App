import { Sequelize } from "sequelize";
import db from "../../database/config";

const { DataTypes } = Sequelize;

const Audit_Log = db.define('Audit_Logs', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    table_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    record_id: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['create', 'update', 'delete']]
        }
    },
    old_values: {
        type: DataTypes.JSON,
        allowNull: true
    },
    new_values: {
        type: DataTypes.JSON,
        allowNull: true
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    ip_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_agent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    session_id: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();