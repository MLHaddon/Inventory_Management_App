import sequelize from "sequelize";
import db from "../../database/config";

const Stock_Transfer_Line = db.define('Stock_Transfer_Lines', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stock_transfer_id: {
        type: sequelize.INTEGER,
        references: {
            model: 'Stock_Transfers',
            key: 'id'
        }
    },
    product_id: {
        type: sequelize.INTEGER,
        references: {
            model: 'Products',
            key: 'id'
        }
    },
    from_location_id: {
        type: sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'Storage_Locations',
            key: 'id'
        }
    },
    to_location_id: {
        type: sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'Storage_Locations',
            key: 'id'
        }
    },
    quantity_sent: {
        type: sequelize.INTEGER
    },
    quantity_received: {
        type: sequelize.INTEGER,
        defaultValue: 0
    },
    unit_cost: {
        type: sequelize.DECIMAL(10,2)
    },
    batch_number: {
        type: sequelize.STRING,
        allowNull: true
    },
    serial_number: {
        type: sequelize.STRING,
        allowNull: true
    },
    condition_on_arrival: {
        type: sequelize.STRING
    },
    notes: {
        type: sequelize.TEXT
    },
    created_at: {
        type: sequelize.DATE
    },
    updated_at: {
        type: sequelize.DATE
    }

}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();