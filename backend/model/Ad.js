const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const adSchema = new Schema({
    companyId: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    primaryText: {
        type: String,
    },
    headline: {
        type: String,
    },
    description: {
        type: String,
    },
    CTA: {
        type: String,
        enum: ["Sign Up", "Shop Now", "Learn More", "Order Now"]
    },
    imageUrl: {
        type: String
    }
})



module.exports = mongoose.model("Ad", adSchema);
