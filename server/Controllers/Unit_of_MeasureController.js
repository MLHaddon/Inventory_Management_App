import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Unit_of_Measure from '../Models/Unit_of_MeasureModel';

export const getUnit_of_Measure = async (req, res) => {
    try {
        const unit_of_measure = await Unit_of_Measure.findOne({
            where: {id: req.params.id}
        });
        if (!unit_of_measure) return res.status(500).json({message: "Unit Of Measure NOT FOUND"});
    } catch (error) {
        res.status(400).json({message: "Internal Server Error", error});
    };
};

export const getUnits_of_Measure = async (req, res) => {
    try {
        const 
    } catch (error) {

    };
};

export const updateUnit_of_Measure = async (req, res) => {
    try {

    } catch (error) {

    };
};

export const deleteUnit_of_Measure = async (req, res) => {
    try {

    } catch (error) {

    };
};
