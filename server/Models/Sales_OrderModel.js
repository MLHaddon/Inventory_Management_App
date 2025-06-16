import { Sequelize } from "sequelize";
import db from "../config/Database.js"; 

const { DataTypes } = Sequelize;   

const Sales_Order = db.define('Sales_Orders', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    order_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    customer_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Customers',
            key: 'id'
        }
    },
    warehouse_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Warehouses',
            key: 'id'
        }
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    required_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    shipped_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['draft', 'confirmed', 'picking', 'packed', 'shipped', 'delivered', 'cancelled']]
        }
    },
    subtotal: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    },
    tax_amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    shipping_cost: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    discount_amount: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    total_amount: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    },
    payment_status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['pending', 'partial', 'paid', 'overdue']]
        }
    },
    shipping_method: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tracking_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    created_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
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
    freezeTableName: true
});

(async () => {
    await db.sync();
})();