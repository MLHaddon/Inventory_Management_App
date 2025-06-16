import sequelize from "sequelize";
import db from '../config/db.js';

const { DataTypes } = sequelize();

const Unit_of_Measure = db.define('Unit_of_Measures', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    abbreviation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    base_unit_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Unit_of_Measures',
            key: 'id'
        }
    },
    conversion_factor: {
        type: DataTypes.DECIMAL(10, 4),
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
    freezeTableName: true
});

(async () => {
    db.sync();
})();