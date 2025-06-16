import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import Purchase_order from "../Models/Purchase_orderModel";

export const getPurchase_Order = async (req, res) => {
    try {
        const purchase_order = await Purchase_order.findOne({
            where: {id: req.params.id}
        });
        if (!purchase_order) return res.status(500).json({message: "purchase order not found"});
    } catch (error) {
        res.error(400).json({message: "Internal error retrieving purchase order"});
    };
};

export const getPurchase_Orders = async (req, res) => {
    try {
        const purchase_order = await Purchase_order.findAll();
        if (!purchase_orders) return res.status(500).json({message: "Purchase Orders not found"});
    } catch (error) {
        res.error(400).json({message: "Internal error retrieving purchase order"});
    };
};

export const updatePurchase_Order = async (req, res) => {
    try {
        const purchase_order = await Purchase_order.findOne({
            where: {id: req.params.id}
        });
        if (!purchase_order) return res.status(500).json({message: "Purchase Orders not found"});
    } catch (error) {
        res.error(400).json({message: "Internal error retrieving purchase order"});
    };
};

export const deletePurchase_Order = async (req, res) => {
    try {
        const purchase_order = await Purchase_order.findOne({
            where: {id: req.params.id}
        });
        if (!purchase_order) return res.status(500).json({message: "Purchase orders not found"});
    } catch (error) {
        res.error(400).json({message: "Internal error retrieving purchase order"});
    };
};
