const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: {
        type:String,
        required: true,
        trim:true
    },
    url: {
        type:String,
        required: true,
        trim:true
    }
})



module.exports = mongoose.model("Company", companySchema);