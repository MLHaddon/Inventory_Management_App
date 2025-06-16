import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Brand from '../Models/BrandModel';

export const getBrand = async (req, res) => {
    try {
        const brand = await Brand.findOne({
            where: {id: req.params.id}
        });
        if (!brand) return res.status(500).json({message: "Brand not found"});
        res.status(200).json({message: "Brand Request Successful"});
    } catch (error) {
        res.error(400).json({message: "Internal Server Error finding brand: ", error});
    };
};

export const getBrands = async (req, res) => {
    try {
        const brands = await Brand.findAll();
        if (!brands) return res.status(500).json({message: "Brands not found"});
        res.status(200).json({message: "Brand Successfully GOT", body: brands});
    } catch (error) {
        res.status(400).json ({message: "Internal Server Error", error});
    };
};

export const updateBrand = async (req, res) => {
    try {
        const brand = await Brand.findOne();
        if (!brand) return res.status(500).json({message: "Brand not found"});
        const { name, slug, description, logo_url, website_url, contact_email, contact_phone, is_active } = req.params.body;
        await Brand.update({
            attributes:
            name,
            slug,
            description,
            logo_url,
            website_url,
            contact_email,
            contact_phone,
            is_active
        }, {
            where: {id: req.params.id}
        });
    } catch (error) {
        res.Status()
    };
};

export const deleteBrand = async (req, res) => {
    try {
        const brand = await Brand.findOne({
            where: {id: req.params.id}
        });
        if (!brand) return res.status(500).json({message: "Brand not found"});
    } catch (error) {
        res.status()
    };
};