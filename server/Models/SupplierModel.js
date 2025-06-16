import sequelize from "sequelize";
import db from '../config/db.js';

const { DataTypes } = sequelize();

const Supplier = db.define('Suppliers', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    supplier_code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact_person: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    mobile: {
        type: DataTypes.STRING
    },
    fax: {
        type: DataTypes.STRING
    },
    website: {
        type: DataTypes.STRING
    },
    tax_id: {
        type: DataTypes.STRING
    },
    payment_terms: {
        type: DataTypes.STRING
    },
    credit_limit: {
        type: DataTypes.DECIMAL(12,2)
    },
    currency_code: {
        type: DataTypes.STRING,
        defaultValue: 'USD'
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    rating: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    },
    notes: {
        type: DataTypes.TEXT
    },
    created_by: {
        type: DataTypes.UUID,
        references: {
            model: 'Users',
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
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();