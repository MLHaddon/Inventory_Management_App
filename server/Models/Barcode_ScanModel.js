import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Barcode_scan = db.define('Barcode_Scans', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    barcode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'products',
            key: 'id'
        }
    },
    scan_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['receiving', 'picking', 'cycle_count', 'lookup']]
        }
    },
    location_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'storage_locations',
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    scanned_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    device_info: {
        type: DataTypes.JSON,
        allowNull: false
    },
    gps_coordinates: {
        type: DataTypes.STRING,
        allowNull: true
    },
    scanned_at: {
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