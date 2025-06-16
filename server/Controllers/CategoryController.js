import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Category from "../Models/CategoryModel";

export const getCategory = async (req, res) => {
    try {
        const category = await Category.findOne({
            where: {id: req.params.id}
        });
        if (!Category) return res.status(500).json({message: "Category not found"});
    } catch (error) {
        res.error(400).json({message: "Internal Server Error getting category", error});
    };
};

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        if (!Categories) return res.status(500).json({message: "Internal Serv Error"});
        res.status(200).json({message: "Get Categories Successful", body: categories});
    } catch (error) {
        res.error(400).json({message: "Internal Server Error getting categories", error});
    };
};

export const updateCategory = async (req, res) => {
    try {
        const category = await Category.findOne({
            where: {id: req.params.id}
        });
        if (!category) return res.status(500).json({message: "Category not found"});
        const { name, slug, description, parent_id, image_url, sort_order, is_active, meta_title, meta_description } = req.params.body;
        await Category.update({
            attributes:
                name,
                slug,
                description,
                parent_id,
                image_url,
                sort_order,
                is_active,
                meta_title,
                meta_description
        });
        res.status(200).json({message: "Category Updated Successfully"});
    } catch (error) {
        res.error(400).json({message: "Internal Server Error Updating Category", error});
    };
};

export const DeleteCategory = async (req, res) => {
    try {
        const category = await Category.findOne({
            where: {id: req.params.id}
        });
        if (!category) return res.status(500).json({message: "Category not found"});
        await Category.destory({
            where: {id: req.params.id}
        });
        res.status(200).json({message: "Category deleted successfully"});
    } catch (error) {
        res.error(400).json({message: "Internal Server Error Deleting Category"});
    };
};