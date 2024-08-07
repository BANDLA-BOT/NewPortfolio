import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    message:{
        type:String,
        required:true
    }
})

const contactModel = mongoose.model('contactform', contactSchema)
export default contactModel