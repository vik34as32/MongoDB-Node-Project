const mongoose = require('mongoose')

const cityPopulationSchema = new mongoose.Schema({
    city :{
        type:String,
        required:true,
        trim:true
    },
    loc:[Number],
    pop:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        required:true
    }
})

const Population_Model = new mongoose.model('Population_Model',cityPopulationSchema)

module.exports =Population_Model