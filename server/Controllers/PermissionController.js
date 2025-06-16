import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Permission from "../Models/PermissionModel";

export const getPermission = async (req, res) => {
    try {
        const Permission = await Permissions.findOne({
            where: {id: req.params.id}
        });
        if (!Permission) return res.status(500). json ({message: "Permission not found"});
    } catch (error) {
        res.status(400).json({message: "Internal server error"});
        console.error("Error getting permission", error);
    };
};

export const getPermissions = async (req, res) => {
    try {
        const Permissions = await Permissions.findAll();
        if (!Permissions) return res.status(500).json({message: "Permissions not found"});
    } catch (error) {
        res.status(400).json({message: "Internal Server Error getting permissions"});
        console.error("Error getting permissions", error);
    };
};

export const updatePermissions = async (req, res) => {
    try {
        const Permissions = await Permissions.findOne({
            where: {id: req.params.id}
        });
        if (!Permission) return res.status(500).json({message: "Permission not found"});
    } catch (error) {
        res.status(400).json({message: "Internal server error updating permissions"});
        console.error("error updating permission", error);
    };
};

export const deletePermission = async (req, res) => {
    try {
        const Permission = await Permissions.findOne({
            where: {id: req.params.id}
        });
        if (!Permission) return res.status(500).json({message: "PErmission not found"});
    } catch (error) {
        res.status(400).json({message: "Internal server error deleting permission"});
        console.error("Error in Deletion of Permission", error);
    };
};