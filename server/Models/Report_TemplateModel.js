import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Report_Template = db.define('Report_Templates', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    report_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['inventory', 'sales', 'purchase', 'movement']]
        }
    },
    parameters: {
        type: DataTypes.JSON
    },
    layout_config: {
        type: DataTypes.JSON
    },
    is_public: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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
        defaultValue: Sequelize.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }

}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();