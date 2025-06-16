import sequelize from "sequelize";
import db from '../config/db.js';
const { DataTypes } = sequelize();

const RolePermission = db.define('Role_Permissions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id'
        }
    },
    permission_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'permissions',
            key: 'id'
        }
    }

}, {
    freezeTableName: true
});

(async () => {
    db.sync();
})();