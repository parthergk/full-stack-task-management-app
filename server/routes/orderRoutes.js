const express = require("express");
const router = express.Router();
const dbConnect = require("../config/db");
const Menu = require("../models/Menu");
const Order = require("../models/Order");

router.post('/', async(req, res)=>{
    const {userId, items} = req.body;

    if (!userId || !items) {
        return res.status(400).json({ message: "User ID and items are required" });
    }

    await dbConnect();

    try {
        const allItems = await Menu.find({'_id': {$in: items.map(item=> item.menuItemId)}})
        

        const totalAmount = items.reduce((total, item) => {
            const menuItem = allItems.find(menuItem => menuItem._id.toString() === item.menuItemId);
            return total + (menuItem.price * item.quantity);
        }, 0);        
        
        // Create a new order
        const newOrder = new Order({
            userId,
            items,
            totalAmount,
            status: 'Pending',
        });

        await newOrder.save();

        res.status(201).json({ message: "Order placed successfully", order: newOrder });
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ message: "An error occurred while placing the order" });
    }
});

router.get('/', async (req, res) => {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
    }

    await dbConnect();


    try {
        const orders = await Order.find({ userId }).populate('items.menuItemId');

        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "An error occurred while fetching orders" });
    }
});

module.exports = router;