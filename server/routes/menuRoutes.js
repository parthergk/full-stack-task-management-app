const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");
const dbConnect = require("../config/db");

// Fetch all menu items
router.get('/menu', async (req, res) => {
    await dbConnect();
    try {
        const data = await Menu.find();
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching menu data:", error);
        res.status(500).json({ message: "An error occurred while fetching menu items" });
    }
});

// Add a new menu item
router.post('/menu', async (req, res) => {
    const { name, category, price } = req.body;

    if (!name || !category || !price) {
        return res.status(400).json({ message: "Name, category, and price are required" });
    }

    try {
        const newItem = new Menu({ name, category, price, availability: true });
        await newItem.save();

        res.status(201).json({ message: "Item added successfully", item: newItem });
    } catch (error) {
        console.error("Error adding new menu item:", error);
        res.status(500).json({ message: "An error occurred while adding the menu item" });
    }
});

// Update a menu item
router.put('/menu/:id', async (req, res) => {
    const { id } = req.params;
    const { name, category, price, availability } = req.body;

    if (!name || !category || !price || !availability ) {
        return res.status(400).json({ message: "Name, category, price, and availability are required" });
    }

    await dbConnect();

    try {
        const updatedItem = await Menu.findByIdAndUpdate(
            id,
            { name, category, price, availability },
            { new: true } 
        );

        if (!updatedItem) {
            return res.status(404).json({ message: "Menu item not found" });
        }

        res.status(200).json({ message: "Item updated successfully", item: updatedItem });
    } catch (error) {
        console.error("Error updating menu item:", error);
        res.status(500).json({ message: "An error occurred while updating the menu item" });
    }
});

// Delete a menu item
router.delete('/menu/:id', async (req, res) => {
    const { id } = req.params;

    await dbConnect();

    try {
        const deletedItem = await Menu.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ message: "Menu item not found" });
        }

        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        console.error("Error deleting menu item:", error);
        res.status(500).json({ message: "An error occurred while deleting the menu item" });
    }
});

module.exports = router;
