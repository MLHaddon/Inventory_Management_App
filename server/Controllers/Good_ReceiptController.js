import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import Good_Receipt from "./Good_ReceiptController";

export const getGood_Receipt = async (req, res) => {
    try {
        const good_receipt = await Good_Receipt.findOne({
            where: {id: req.params.id}
        });
        if (!good_receipt) return res.status(500).json({message: "Good Receipts not found"});
    } catch (error) {
        res.error(400).json({message: "Internal server error retrieving good receipts"});
    };
};

export const getGood_Receipts = async (req, res) => {
    try {
        const good_receipts = await Good_Receipt.findAll();
        if (!good_receipts) return res.status(500).json({message: "Good Receipts not found"});
    } catch (error) {
        res.error(400).json({message: "Internal Error"});
    };
};

export const updateGood_Receipts = async (req, res) => {
    try {
        const good_receipt = await Good_Receipt.findOne({where: {id: req.params.id}});
        if (!good_receipt) return res.staus(500).json ({message: "Good Receipts not found"});
        const {  } = req.params.body;
    } catch (error) {
        res.error(400).json({message: "Internal Server Error updating good receipts", error});
    };
};

export const deleteGood_receipts = async (req, res) => {
    try {
        const good_receipts = await Good_Receipt.findOne({where: req.params.id});
        if (!good_receipt) return res.status(500).json({message: "Good Receipts Not fount"});
    } catch (error) {
        res.error(400).json({message: "Internal Server Error deleting good receipt"});
    };
};