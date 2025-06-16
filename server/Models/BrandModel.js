import sequelize from "sequelize";
import db from '../config/db.js';

const { DataTypes } = sequelize();

const Brand = db.define('Brands', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    logo_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    website_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contact_email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    contact_phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
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
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {
    freezeTableName: true
});

(async () => {
    db.sync();
})();