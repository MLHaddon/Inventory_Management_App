import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Product_Image from '../Models/Product_ImageModel';

export const getProduct_image = async (req, res) => {
    try {
        const product_image = await Product_Image.findOne({
            where: {id: req.params.id}
        });
        if (!product_image) return res.status(500).json({message: "product image not found"});
    } catch (error) {
        res.error(400).json({message: 'Internal Server Error fetching product_image: ', error});
    }
};

export const getProduct_images = async (req, res) => {
    try {
        const product_images = await Product_Image.findAll();
        if (!product_images) return res.status(500).json({message: "product_images not found"});
    } catch (error) {
        res.error(400).json({message: "Internal server error finding product_images", error});
    };
};

export const updateProduct_image = async (req, res) => {
    try {
        const product_image = await Product_images.findOne({
            where: {id: req.params.id}
        });
        if (!product_image) return res.status(500).json({message: "Product Image not found"});
        const { 
            product_id,
            image_url,
            alt_text,
            is_primary,
            sort_order
         } = req.params.body;
        await product_image.update({
            attributes:
            product_id,
            image_url,
            alt_text,
            is_primary,
            sort_order
        })
    } catch (error) {
        res.error(400).json({message: "product image not found", error});
    };
};

export const deleteProduct_image = async (req, res) => {
    try {
        const product_image = await Product_image.findOne({
            where: {id: req.params.id}
        });
        if (!product_image) return res.status(500).json({message: "Product image not found"});
    } catch {
        res.error(400).json({message: "Internal Server Error", error});
    };
};