import sequelize from "sequelize";
import db from '../config/db.js';

const { DataTypes } = sequelize();

const Product = db.define('Products', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    sku: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    barcode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    short_description: {
        type: DataTypes.TEXT
    },
    category_id: {
        type: DataTypes.UUID,
        references: {
            model: 'categories',
            key: 'id'
        }
    },
    brand_id: {
        type: DataTypes.UUID,
        references: {
            model: 'brands',
            key: 'id'
        }
    },
    unit_of_measure_id: {
        type: DataTypes.UUID,
        references: {
            model: 'units_of_measure',
            key: 'id'
        }
    },
    cost_price: {
        type: DataTypes.DECIMAL(10,2)
    },
    selling_price: {
        type: DataTypes.DECIMAL(10,2)
    },
    markup_percentage: {
        type: DataTypes.DECIMAL(5,2)
    },
    weight: {
        type: DataTypes.DECIMAL(8,3)
    },
    dimensions_length: {
        type: DataTypes.DECIMAL(8,2)
    },
    dimensions_width: {
        type: DataTypes.DECIMAL(8,2)
    },
    dimensions_height: {
        type: DataTypes.DECIMAL(8,2)
    },
    color: {
        type: DataTypes.STRING
    },
    size: {
        type: DataTypes.STRING
    },
    material: {
        type: DataTypes.STRING
    },
    warranty_period: {
        type: DataTypes.INTEGER
    },
    expiry_tracking: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    serial_tracking: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    batch_tracking: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    min_stock_level: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    max_stock_level: {
        type: DataTypes.INTEGER
    },
    reorder_point: {
        type: DataTypes.INTEGER
    },
    reorder_quantity: {
        type: DataTypes.INTEGER
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    is_serialized: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    tax_rate: {
        type: DataTypes.DECIMAL(5,2)
    },
    created_by: {
        type: DataTypes.UUID,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    updated_by: {
        type: DataTypes.UUID,
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