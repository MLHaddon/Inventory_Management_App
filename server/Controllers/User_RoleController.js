import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User_Role from "../Models/User_RoleModel";

export const getUser_Roles = async (req, res) => {
    try {
        const User_Role = await User_Roles.findOne({
            where: {id: req.params.id}
        });
        if (!User_Role) return res.status(500).json({message: "User_Role not found"});
        res.status(200).json({message: "Get User_Role Successful", User_Role});
    } catch (error) {
        res.error(400).json({message: "Internal Server Error Requesting User_Role"});
        console.error("Error in server: ", error);
    };
};

export const getUser_roles = async (req, res) => {
    try {
        const User_roles = await User_roles.findAll();
        if (!User_Roles) return res.status(500).json({message: "User_Roles not found"});
        res.status(200).json({message: "Get User_Roles successful", User_Roles});
    } catch (error) {
        res.error(400).json({message: "Internal Server Error Requesting User_Roles"});
        console.error("Error in server: ", error);
    };
};

export const updateUser_Role = async (req, res) => {
    try {
        const User_Role = await User_Roles.findOne({
            where: {id: req.params.id}
        });
        if (!User_Role) return res.status(500).json({message: "User_Role not found"});
        const { user_id, role_id, assigned_by, assigned_at, expires_at } = req.params.body;
        await User_Roles.update({
            attributes: {
                user_id,
                role_id,
                assigned_by,
                assigned_at,
                expired_at
            }
        }); 
    } catch (error) {
        res.status(400).json({message: "Internal Server Error Updating User_Roles"});
        console.error("Error in server", error);
    }
};

export const deleteUser_Role = async (req, res) => {
    try {
        const User_role = await User_roles.findOne({
            where: {id: req.params.id}
        });
        if (!User_Role) return res.status(500).json({message: "User_Role not found"});
        await User_Role.destroy();
    } catch (error) {
        res.status(200).json({message: "Internal Server Error Updating User_roles"});
        console.error("Internal server error", error);
    }
};