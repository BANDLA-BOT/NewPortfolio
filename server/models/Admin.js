import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        required:true,
        min:6,
        type:String
    }
})
const Admin = mongoose.model('Admin', adminSchema)
export default Admin