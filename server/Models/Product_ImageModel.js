import sequelize from "sequelize";
import db from '../config/db.js';

const { DataTypes } = sequelize();

const Product_Image = db.define('Product_Images', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'id'
        }
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    alt_text: {
        type: DataTypes.STRING,
        allowNull: true
    },
    is_primary: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    sort_order: {
        type: DataTypes.INTEGER,
        defaultValue: 0
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
    db.sync();
})();