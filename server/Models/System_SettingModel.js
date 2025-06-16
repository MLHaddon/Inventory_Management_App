import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const System_Setting = db.define('System_Setting', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    setting_key: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    setting_value: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    setting_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['string', 'number', 'boolean', 'json']]
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['general', 'inventory', 'email', 'security']]
        }
    },
    description: {
        type: DataTypes.TEXT
    },
    is_editable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    updated_by: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();