const express = require('express');
const Property = require('../models/Property');
const User = require('../models/User');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post('/', async (req, res) => {
    const { title, location, price,amenities, bathrooms, bedrooms,  sellerId } = req.body;
    try {
        const newProperty = new Property({ title, location, price, amenities, bathrooms, bedrooms, sellerId });
        await newProperty.save();
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/seller/:sellerId', async (req, res) => {
    try {
        const sellerId = req.params.sellerId;
        console.log("seeler id", sellerId)
        const properties = await Property.find({ sellerId: sellerId });

        console.log(properties)

        res.json(properties);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.post('/interest/:propertyId', async (req, res) => {
    try {
        const property = await Property.findById(req.params.propertyId).populate('sellerId');
        const buyer = await User.findById(req.body.buyerId); 

        if (!property || !buyer) {
            return res.status(404).send('Property or Buyer not found');
        }

        const seller = await User.findById(property.sellerId);

        
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
			service: process.env.SERVICE,
            port: Number(process.env.EMAIL_PORT),
			secure: Boolean(process.env.SECURE),
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        });

        
        const mailOptionsBuyer = {
            from: process.env.USER,
            to: buyer.email,
            subject: 'Interest in Property',
            text: `You expressed interest in ${property.title}. Seller contact Email: ${seller.email} and number: ${seller.phone}`
        };

        
        const mailOptionsSeller = {
            from: process.env.USER,
            to: seller.email,
            subject: 'Buyer Interest',
            text: `A buyer has shown interest in your property ${property.title}. Buyer contact: ${buyer.email} and number: ${buyer.phone}`
        };

        
        await transporter.sendMail(mailOptionsBuyer);
        await transporter.sendMail(mailOptionsSeller);

        res.send({ message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Failed to express interest:', error);
        res.status(500).send('Error processing your interest');
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedProperty = await Property.findByIdAndUpdate(id, updates, { new: true });
        res.json(updatedProperty);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Property.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
