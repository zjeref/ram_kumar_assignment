const express = require('express');
const router = express.Router();
const Ad = require('../model/Ad');

router.post('/create/:companyId', async (req, res) => {
    try {
        const companyId = req.params.companyId;
        const { primaryText, headline, description, CTA, imageUrl } = req.body;
        const newAd = new Ad({
            companyId: companyId,
            primaryText: primaryText,
            headline: headline,
            description: description,
            CTA: CTA,
            imageUrl: imageUrl
        })
        try {
            newAd.save();
        } catch (e) {
            res.status(409).json({ message: e.message });
        }
        res.status(200).json(newAd);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// router.get('/', async (req, res) => {
//     try {
//         Ad.createIndexes({})
//         const ads = await Ad.find({})
//             .populate('companyId');
//         res.status(200).json(ads);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// })

router.get('/', async (req, res) => {
    try {
        const searchString = req.query.search
        let ad
        if (searchString != "" || undefined) {
            ad = await Ad.aggregate([
                {
                    $lookup: {
                        from: "companies",
                        localField: "companyId",
                        foreignField: "_id",
                        as: "company"
                    }
                },
                { $unwind: "$company" },
                {
                    $match: {
                        $or: [
                            { "company.name": { $regex: searchString, $options: "i" } },
                            { description: { $regex: searchString, $options: "i" } },
                            { headline: { $regex: searchString, $options: "i" } },
                            { primaryText: { $regex: searchString, $options: "i" } }
                        ]
                    }
                },
            ])
        } else {
            ad = await Ad.aggregate([
                {
                    $lookup: {
                        from: "companies",
                        localField: "companyId",
                        foreignField: "_id",
                        as: "company"
                    }
                },
                { $unwind: "$company" }
            ])
        }
        res.status(200).json(ad);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;