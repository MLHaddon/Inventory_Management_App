import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Role from '../models/RoleModel.js';

export const getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    console.error('Error in getRoles:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getRole = async (req, res) => {
  try {
    const role = await Role.findOne({
      where: { id: req.params.id }
    });
    if (!role) return res.status(404).json({ message: "Role not found" });
    res.json(role);
  } catch (error) {
    console.error('Error in getRole:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createRole = async (req, res) => {
  const { name } = req.body;
  try {
    const newRole = await Role.create({
      name
    });
    res.status(201).json(newRole);
  } catch (error) {
    console.error('Error in createRole:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateRole = async (req, res) => {
  try {
      const role = await Role.findOne({
        where: { id: req.params.id }
      });
      if (!role) return res.status(404).json({ message: "Role not found" });
      const { name, display_name, description, is_active } = req.body;
      await Role.update({
        name,
        display_name,
        description,
        is_active
      }, {
        where: {id: req.params.id}
      });
      res.status(200).json({ message: "Order updated successfully", updateOrder });
    } catch (error) {
        console.error('Error in updateRole:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteRole = async (req, res) => {
  try {
    const role = await Role.findOne({
      where: {id: req.params.id}
    });
    if (!Role) return res.status(200).json({message:"Role not found"});
    await Roles.destroy({
      where: {id: req.Role.id}
    });
    res.status(200).json({ message: "Role deleted successfully" });
  } catch (error) {
    console.error("Error in deleteRole", error);
    res.status(500).json({ message: "Internal Server Error deleting Role", error });
  }
};