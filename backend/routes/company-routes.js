const express = require('express');
const router = express.Router();
const Company = require('../model/Company');


router.post('/create', async (req, res) => {
    try {
        const { name, url } = req.body;
        const newCompany = new Company({
            name: name,
            url: url
        });
        newCompany.save();
        res.send(200).json(newCompany);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get("/", async (req, res) => {
    try {
        const companies = await Company.find({});
        res.status(200).json(companies)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;
