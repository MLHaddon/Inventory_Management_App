import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Product from '../Models/ProductModel';

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {id: req.params.id}
        });
        if (!Product) return res.status(500).json({message: "Product not found"});
        res.status(200).json({message: "Product Got Successfully"});
    } catch (error) {
        res.status(400).json({message: "Internal server error"});
    };
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.getAll();
        if (!Products) return res.status(500).json({message: "Products not found"});
        res.status(200).json({message: "Products retrieved successfully", message});
    } catch (error) {
        res.status(400).json({message: "Internal Server Error"});
    };
};

export const updateProducts = async (req, res) => {
    try {
        const Product = await Product.getOne({
            where: {id: req.params.id}
        });
        if (!Product) return res.status(500).json({message: "Product not found"});
        const { 
            sku,
            barcode,
            name,
            slug,
            description,
            short_description,
            category_id,
            brand_id,
            unit_of_measure_id,
            cost_price,
            selling_price,
            markup_percentage,
            weight,
            dimensions_length,
            dimensions_width,
            dimensions_height,
            color,
            size,
            material,
            warranty_period,
            expiry_tracking,
            serial_tracking,
            batch_tracking,
            min_stock_level,
            max_stock_level,
            reorder_point,
            reorder_quantity,
            is_active,
            is_serialized,
            tax_rate,
            created_by,
            updated_by
         } = req.params.body
         await Product.update({
            attributes:
            sku,
            barcode,
            name,
            slug,
            description,
            short_description,
            category_id,
            brand_id,
            unit_of_measure_id,
            cost_price,
            selling_price,
            markup_percentage,
            weight,
            dimensions_length,
            dimensions_width,
            dimensions_height,
            color,
            size,
            material,
            warranty_period,
            expiry_tracking,
            serial_tracking,
            batch_tracking,
            min_stock_level,
            max_stock_level,
            reorder_point,
            reorder_quantity,
            is_active,
            is_serialized,
            tax_rate,
            created_by,
            updated_by
         });
        res.status(200).json({message: "Product updated successfully"});
    } catch (error) {
        res.error(400).json({message: "Internal Server Error: ", error})
    };
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {id: req.params.id}
        });
        if (!product) return res.status(500).json({message: "Product not found"});
        await  Product.destroy({
            where: {id: req.product.id}
        });
    } catch (error) {
        res.error(400).json({message: "Internal Server Error deleting product, Error: ", error});
    };
};