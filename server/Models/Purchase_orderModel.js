import { Sequelize } from "sequelize";
import db from '../../database/config';

const { DataTypes } = Sequelize;

const Purchase_Order = db.define('Purchase_Orders', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    po_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    supplier_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'suppliers',
            key: 'id'
        }
    },
    warehouse_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'warehouses',
            key: 'id'
        }
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    expected_delivery_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    actual_delivery_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['draft', 'sent', 'confirmed', 'partial', 'received', 'cancelled']]
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
    total_amount: {
        type: DataTypes.DECIMAL(12,2),
        allowNull: false
    },
    currency_code: {
        type: DataTypes.STRING,
        defaultValue: 'USD',
        allowNull: false
    },
    payment_terms: {
        type: DataTypes.STRING,
        allowNull: false
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    created_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    approved_by: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    approved_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }

}, {
    freezeTableName: true
});

(async, () => {
    db.sync();
});