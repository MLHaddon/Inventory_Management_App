import sequelize from "sequelize";
import db from '../config/db.js';

const { DataTypes } = sequelize();

const Storage_Location = db.define('Storage_Locations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    warehouse_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'warehouses',
            key: 'id'
        }
    },
    location_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    aisle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rack: {
        type: DataTypes.STRING,
        allowNull: true
    },
    shelf: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bin: {
        type: DataTypes.STRING,
        allowNull: true
    },
    location_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['shelf', 'floor', 'rack', 'bin']]
        }
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
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
    freezeTableName:true
});

(async () => {
    db.sync();
})();