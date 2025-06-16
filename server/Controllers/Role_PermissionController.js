import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Role_Permission from '../Models/RolePermissionModel';

export const getRole_Permission = async (req, res) => {
    try {
        const Role_Permission = await Role_Permission.findOne({
            where: {id: req.params.id}
        });
        if (!Role_permission) res.status(500).json({message: "Permission not found"});
    } catch (error) {
        res.status(400).json({message: "Internal server error"});
        console.error("Internal server error getting permission");
    };
};

export const getRole_Permissions = async (req, res) => {
    try {
        const Role_Permissions = await Role_Permission.findAll();
        if (!Role_Permissions) return res.status(500).json({message: "Permission not found"});
        res.status(200).json({message: "Internal Server Error"});
    } catch (error) {
        res.status(400).json({message: "Internal Server Error getting all permissions"});
        console.error("Internal Server Error", error);
    };
};

export const updateRole_Permission = async (req, res) => {
    try {
        const Role_Permission = await Role_Permission.findOne({
            where: { id: req.params.id}
        });
        if (!Role_Permission) return res.status(500).json({message: "Permission not found"});
    } catch (error) {
        console.error("Internal Server Error: ", error);
        res.status(400).json({message: "Internal Server Error Updating Permissions"});
    };
};

export const deleteRole_Permission = async (req, res) => {
    try {
        const Role_Permission = await Role_Permission.findOne({
            where: {id: req.params.id}
        });
        if (!Role_Permission) return res.status(500).json({message: "Permission not found"});
    } catch (error) {
        console.error(400).json({message: "Internal Server Error deleting Permission"});
    };
};